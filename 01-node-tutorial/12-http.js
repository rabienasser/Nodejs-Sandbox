const http = require("http");

const server = http.createServer((req, res) => {
   if (req.url === "/") {
      res.write("welcome to our home page");
      res.end();
   }
   if (req.url === "/about") {
      //   short cut way of doing it
      res.end("Here is our short history");
   }
   res.end(`
   <h1>Oops! This page does not exist</h1>
   <a href="/">Back to home</a>
   `);
});

server.listen(5000);
