const express = require('express');
const app = express();
const path = require('path');
const { Socket } = require('socket.io');
const server = require('http').createServer(app);

const io = require('socket.io')(server);
io.on("connection",function(){
    Socket.on("newuser",function(username){
      Socket.broadcast.emit("update",username +"joined the conversation");  
    })
    Socket.on("exituser",function(username){
        Socket.broadcast.emit("update",username +"left the conversation");  
      })
      Socket.on("chat",function(message){
        Socket.broadcast.emit("chat",message);  
      })
});

app.use(express.static(path.join(__dirname+"/public")));
server.listen(5000,()=>{
    console.log("server started");
});