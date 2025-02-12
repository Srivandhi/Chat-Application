const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);

app.use(express.static(path.join(__dirname+"/public")));
server.listen(5000,()=>{
    console.log("server started");
});