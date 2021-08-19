const express =require('express');
const socket =require('socket.io');
const app = express();
const server =app.listen(3000,()=>{
    console.log('Listing on the port 3000');
})

const io = socket(server);


app.use(express.static('public'));

    // let count = 0 ;
    let  message = "Welcome";
io.on('connection',(socket)=>{



    console.log("connection established");

    socket.emit('message',message);
    // // socket.emit("countUpdated",count);

    // // socket.on('Increment',()=>{
    // //     count++;
    // //     io.emit('countUpdated',count);
    // });

})

