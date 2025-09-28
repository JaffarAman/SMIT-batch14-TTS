import express from "express";

const app = express();
const PORT = 5000;

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.send("server running");
});

app.get("/getuser", (request, response) => {
  response.send("Fetch User!");
});

app.post("/createuser", (request, response) => {
  console.log("request.body", request.body);
  response.send("CREATED!");
});

app.put("/updateuser", (request, response) => {
  response.send("Updated!");
});

app.delete("/deleteuser", (request, response) => {
  response.send("Deleted!");
});

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
