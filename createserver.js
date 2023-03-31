let http = require("http");

http
  .createServer((req, res) => {
    res.write("this is my first server created by me  ");
    res.end();
  })
  .listen(4000);
  