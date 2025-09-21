// import http from "http"

// const PORT = 5001

// const server  = http.createServer()

// server.listen(PORT , ()=>console.log(`server running on http://localhost:${PORT}`))

import express, { response } from "express";
import { product } from "./product.js";

const app = express();

// app.get(url , callBack)
// app.get("/", (request, response) => {
//   console.log("request", request.url);
//   response.send("Server Running!");
// });

app.get("/", (request, response) => {
  response.send("SERVER RUNNING!");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("contact page");
});

// All product
app.get("/product", (request, response) => {
  console.log("request", request.url);

  response.send(product);
});

// Single Prod Api
app.get("/product/:id", (request, response) => {
  console.log("request single prod api ", request.url);
  console.log("request params", typeof request.params.id);
  const findProduct = product.find((obj) => {
    // console.log("obj", obj);
    if (obj.id == request.params.id) {
      return obj;
    }
  });
  console.log("findProduct", findProduct);

  if (findProduct) {
    response.send(findProduct);
  } else {
    response.send("Product not Found");
  }
});

app.get("/user", (req, res) => {
  console.log("query params", req.query);
  res.send("USER API!");
});

app.listen(5000, () => console.log("server running"));

// params
// query param
