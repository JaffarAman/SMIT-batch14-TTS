import http from "http";
import fs from "fs";
const PORT = 3001;

const server = http.createServer((req, res) => {
  //   switch (req.url) {
  //     case "/":
  //       res.end("SERVER Up");
  //       break;
  //     case "/createUser":
  //       res.end("user created!");
  //       break;

  //     case "/getUser":
  //       res.end("user fetch!");
  //       break;
  //   }

  if (req.url == "/") {
    res.end("SERVER Up");
  } else if (req.url == "/createuser") {
    const userObj = {
      email: "jaffar@gmail.com",
      password: "123456",
    };

    fs.writeFileSync("userObj.txt", JSON.stringify(userObj));

    res.end("user created!");
  } else if (req.url == "/getuser") {
    const data = fs.readFileSync("userObj.txt", "utf-8");
    console.log(data, "data");

    res.end(data);
  } else if (req.url == "/deleteuser") {
    res.end("user deleted!");
  } else if (req.url == "/updateuser") {
    res.end("user updated!");
  } else {
    res.end("not found");
  }
});

server.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
