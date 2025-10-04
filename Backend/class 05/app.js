import express from "express";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import cors from "cors"

const app = express();
const PORT = process.env.PORT || 5000;


//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


// create user
app.post("/createuser", (request, response) => {
  const userExist = fs.existsSync("user.txt");
  const body = { ...request.body, id: uuidv4() };
  console.log("userExist", userExist);

  if (userExist) {
    //second user
    const usersData = JSON.parse(fs.readFileSync("user.txt", "utf-8"));
    usersData.push(body);
    console.log("second user", usersData);
    fs.writeFileSync("user.txt", JSON.stringify(usersData));
    response.json({
      message: "user created!",
    });
  } else {
    // first user
    const arr = [];
    arr.push(body);
    fs.writeFileSync("user.txt", JSON.stringify(arr));
    response.json({
      message: "user created!",
    });
  }

  //   console.log("body", request.body);

  //   fs.writeFileSync("user.txt", JSON.stringify(request.body));
  //   response.json({
  //     message: "User Sucessfully created!",
  //   });
});

app.get("/getuser", (req, res) => {
  const data = JSON.parse(fs.readFileSync("user.txt", "utf-8"));

  res.json({
    data,
  });
});

app.put("/updateuser/:id", (request, response) => {
  const userId = request.params.id;
  const allUsers = JSON.parse(fs.readFileSync("user.txt", "utf-8"));
  console.log("body", request.body);

  const updateUsers = allUsers.map((obj) => {
    if (obj.id == userId) {
      const updateObj = { ...obj, ...request.body };
      console.log("updateObj", updateObj);
      return updateObj;
    } else {
      return obj;
    }
  });

  console.log("updateUsers", updateUsers);
  fs.writeFileSync("user.txt", JSON.stringify(updateUsers));

  response.json({
    message: "user updated!",
  });
});

app.delete("/deleteuser/:userId", (req, res) => {
  const userId = req.params.userId;
  const allUsers = JSON.parse(fs.readFileSync("user.txt", "utf-8"));

  console.log(allUsers, ":allUsers");
  console.log(userId, ":userId");
  const userIndex = allUsers.findIndex((obj) => {
    if (obj.id == userId) {
      return obj;
    }
  });

  console.log("userIndex", userIndex);
  if (userIndex == -1) {
    return res.json("user not found!");
  }

  allUsers.splice(userIndex, 1);
  fs.writeFileSync("user.txt", JSON.stringify(allUsers));

  res.json("user deleted!");
});

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
