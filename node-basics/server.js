// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/about") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("About us page");
//   } else {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Home page");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });


const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/mydatabase'; // replace with your URI

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));