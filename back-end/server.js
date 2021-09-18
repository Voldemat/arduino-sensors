const express = require("express");
const ioServer = require("socket.io");
const http = require("http");

const Database = require("./db.js");
const { syncBuiltinESMExports } = require("module");



// connect to db
const db = new Database();

const PORT = process.env.PORT || 8000;

const app = express();


app.get("/set-data", (req, res) => {
    db.set("sensors", JSON.stringify(req.query))
    res.send("Ok")
})


const httpServer = http.createServer(app);
const io = ioServer(httpServer, {
    cors:{
        origin:"http://localhost:3000"
    }
})



io.on("connection", socket => {
    console.log("socket connected")
    socket.emit("message", "hello from express")

    setInterval(() => {
        db.get("sensors").then(value => {
            socket.emit("sensors", JSON.parse(value))
        })
    }, 100)
})
httpServer.listen(PORT, () => {
    console.log(`Server started at localhost:${PORT}`)
})