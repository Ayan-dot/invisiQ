const server = require("./server");
const config = require("./config");
const { PORT } = config;

server.listen(PORT || 5000, () =>
  console.log(`Server started, listening on port ${PORT}`)
);
