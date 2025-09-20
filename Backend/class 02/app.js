import fs from "fs";

const createFile = () => {
  fs.writeFileSync("hello.txt", "HELLO WORLD");
};

const readFile = () => {
  const read = fs.readFileSync("hello.txt", "utf-8");
  console.log(read);
};

const updateFile = () => {
  fs.appendFileSync("hello.txt", "\nHELLO SMIT");
};

const deleteFile = () => {
  fs.unlinkSync("hello.txt");
};

// createFile();
// readFile()
// updateFile()
// deleteFile()

import http from "http";

const PORT = 3000;

const server = http.createServer((request, response) => {
  console.log("request", request.url);
  //   console.log("response");
  //   response.end("HEllo WORld");
  if (request.url === "/") {
    response.end("HOME");
  } else if (request.url === "/about") {
    response.end("About");
  } else if (request.url === "/contact") {
    response.end("Contact");
  } else {
    response.end("Page not found! 404");
  }
});

server.listen(PORT, () => console.log(`server running`));
