const express = require('express');
const dotenv = require("dotenv");
const {default:mongoose} = require("mongoose");
const userRoutes = require("./Routes/userRoutes");

const app = express();
dotenv.config();

const connectDb = async() => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to db");
    }
    catch(err){
        console.log("couldn't connect to the server!", err.message)
    }
}

connectDb();

app.get("/", (req, res)=> {
    res.send("API");
});

app.use("user/", userRoutes);

console.log(process.env.MONGO_URI);
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server is running.."));