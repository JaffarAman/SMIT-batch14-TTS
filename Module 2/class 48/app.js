// var std1 = {
//   firstName: "jaffar",
//   lastName: "aman",
//   age: 24,
//   email: "jaffar@gmail.com",
// };

// var std100 = {
//   fullName: "bilal",
//   age: 28,
//   email: "bilal@gmail.com",
// };

// var username = document.getElementById("username");
// username.innerHTML = "HELLO 👋 " + std100.firstName;

// STD STr
// firstName
// lastname
// age
// email
// gender

// function Std(firstName , lastName , age , email , gender){
//     this.firstName = firstName
//     this.stdEmail = email
// }

// firstName
// lastname
// age
// email
// gender

// function Std(firstName, lastName) {
//   this.stdFirstName = firstName;
//   this.lastName = lastName;
// }

// var std1 = new Std("Jaffar", "Aman");

// var std2 = new Std("Muhammad", "bilal");

// console.log("std1", std1);
// console.log("std2", std2);

// name
// days
// campus
// time
// trainer

function Courses(name, days, campus, time, trainer, passingStd) {
  // this.propName  = propValue
  this.name = name;
  this.days = days;
  this.campus = campus;
  this.timing = time;
  this.trainer = trainer;
  this.passingStd = passingStd;
  this.getCourseName = function () {
    console.log("1234", this.name);
  };
}
// Courses.prototype.instName = "SMIT"

var course1 = new Courses("modern web and app", "TTS", "ZA", null, "JA");

var course2 = new Courses("Modern web and app", "MWF", ["Malir", "Gulshan"], {
  start: "9",
  end: "11",
});

console.log("course1", course1.getCourseName());
console.log("course2", course2);
course1.timing = "fajar to esha";
console.log("course1", course1);
