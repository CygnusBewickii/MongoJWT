const express = require('express')
const mongoose = require('mongoose');
const {json} = require("express");
const authRouter = require('./authRouter')
const PORT = 3000


const app = express()
mongoose.set("strictQuery", false);

app.use(json())
app.use('/auth', authRouter)


const start = async () => {
    try {
        await  mongoose.connect('mongodb://127.0.0.1:27017/test');
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    }
    catch (e) {
        console.log(e)
    }
}

start()
