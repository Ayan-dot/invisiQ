const { Server } = require("socket.io");
const io = new Server(require("./server"));

io.use()

io.on("connection",  (socket) => {
  console.log("user connected");
});

module.exports = io;
