const express = require('express')
const cors = require("cors")
const app = express()
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/codebase');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


const userSchmema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const User = mongoose.model("signup", userSchmema)

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.json({ message: "Succesfull" })
})

app.post("/createuser", async (req, res) => {
    console.log(req.body)

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })

    const result = await newUser.save()
    res.json({ message: "signup Success", user: result })
})


app.post("/login", async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body
    const existUser = await User.findOne({ email: email})
    if (!existUser || existUser.password != password) {
        res.json({
            status: false,
            message: "Wrong details please check at once"
        })
    }
    else {
        res.json({ message: "success", status: true, user: existUser })
    }

})


app.listen(8000, () => {
    console.log("server is runing")
})