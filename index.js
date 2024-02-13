const http = require('http')
const express = require('express')
const app = express()
const server = http.createServer(app)
const {Server } = require('socket.io')

const path = require('path')
const io = new Server(server);


//Socket Handling
io.on('connection',(socket)=>{  // this socket here is a client ,every client is a socket
// console.log("a new user has connected",socket.id);

socket.on('user-message',(message)=>{               // checking if theres a emit named user-message
         io.emit('message',message)             //server sending this to all clients
})

})

app.use(express.static(path.resolve('./public')))

app.get('/',(req,res)=>{
    return res.sendFile('/public/index.html')
})

server.listen(4000,()=>console.log("Server started"))