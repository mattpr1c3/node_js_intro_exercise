const http = require("http");

const PORT = 5001;

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("This request was successful");
    res.end();
  })

  .listen(PORT, () => {
    console.log(`server is listening at local host ${PORT}`);
  });
