// var io = require('socket.io')(8000);

// io.on('connection', function (socket) {
   
//     socket.on("newMessage", (message) => 
//     {
//         console.log("message==============",message)
//         io.emit("data=---------------------",message);
//        // socket.broadcast.emit("newMessage", message);
//     })
//    // socket.emit("hello");
//     console.log("hello from server-----------------------");
// });
// console.log("server is running on port 8000")

let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('new-message', (message) => {
      console.log("message-------",message);
      io.emit('new-message',message);
    });
});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});