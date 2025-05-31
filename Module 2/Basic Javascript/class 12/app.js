// console.log("Hello world...");

// for(var i = 1 ; i<=10;i++){
//     console.log("i" , i)
// }

// var courses = ["HTML", "CSS", "JAVASCRIPT", "REACT"];
// document.write(courses[0] + "<br />");
// document.write(courses[1] + "<br />");
// document.write(courses[2] + "<br />");
// document.write(courses[3] + "<br />");

// for (var i = 0; i < courses.length; i++) {
//   console.log(i + 1 + " " + courses[i]);
// }

// var userCity = prompt("Enter your City!");
// var cities = ["lahore", "karachi", "multan"];

// for (var i = 0; i < cities.length; i++) {
//   console.log(userCity == cities[i]);
//   if (userCity == cities[i]) {
//     alert("Welcome!");
//     break;
//   }

//   //     if (userCity === cities[i]) {
//   //     alert("Welcome!")
//   //   }
// }

// if (userCity === cities[0]) {
//   alert("Welcome");
// } else if (userCity === cities[1]) {
//   alert("Welcome");
// } else if (userCity === cities[2]) {
//   alert("Welcome");
// } else {
//   alert("Not Found!");
// }

// var userCity = prompt("Enter your City!");
var userCity = "karachiasdasd";
var cities = ["lahore", "karachi", "multan"];

var isMatch = "match nahi howa";

for (var i = 0; i < cities.length; i++) {
  if (userCity == cities[i]) {
    isMatch = "matach hogaya!";
    alert("Welcome!");
    break;
  }
}
console.log("isMatch", isMatch);

if (isMatch == "match nahi howa") {
  alert("not found!");
}
