// var std1Name = "Jaffar";
// var std1Age = 23;
// var std1Course = "Modern web app";

// Array
var std1 = ["john", 30, "web and app"];
console.log(":std1", std1[0]);
// Object

// Prop

// var obj = {
//   name: "John",
//   age: 30,
//   course: "web and app",
// };

// console.log(obj.course, "obj");
// console.log(obj["age"]);

// console.log(obj.course); //dot notation
// console.log(obj["age"]) // array notation

var std = {
  name: "John",
  age: 30,
  course: "web and app",
  cnic: "",
};

// In , Delete

// propName in objName
// var cnicCheck = "cnic" in std;
// console.log("cnicCheck", cnicCheck);

// delete std.cnic
// console.log(std)

var carObj = {
  name: "civic",
  model: "2024",
  color: "darkBlack",
  cc: 1800,
  runningCondition: true,
  reports: null,
};

for (var objKey in carObj) {
  console.log("objKey", objKey , carObj[objKey]);
}
