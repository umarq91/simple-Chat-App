const http = require('http')
const express = require('express')
const app = express()
const server = http.createServer(app)

const path = require('path')

app.use(express.static(path.resolve('./public')))
app.get('/',(req,res)=>{
    return res.sendFile('/public/index.html')
})

server.listen(4000,()=>console.log("Server started"))