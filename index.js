const http = require("http")
var fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html")

  let path = "./pages/"
  switch (req.url) {
    case "/":
      path += "index.html"
      res.statusCode = 200
      break;
    case "/about":
      path += "about.html"
      res.statusCode = 200
      break;
    case "/contact":
      path += "contact.html"
      res.statusCode = 200
      break;
    default:
      path += "404.html"
      res.statusCode = 404
      break;
  }

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    else {
       res.end(data);
    }
  })
});

server.listen(8080, () => {
  console.log(`Server running at http://localhost:8080/`);
});