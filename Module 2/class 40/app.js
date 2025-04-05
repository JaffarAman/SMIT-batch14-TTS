// Array

// cities
// var cities = ["karachi", "lahore", "multan"];

// console.log("cities", cities[1]);

// 2d array

// var cities = [
//   ["karachi", "lahore", 65465],
//   ["mumbai", "delhi", 5465653],
// ];

// console.log(cities[1][1]);

// var cities = ["lahore"];

// cities[0] = "karachi";

// var cities = ["karachi", "multan"];

// cities.push("lahore");
// cities.pop()

// cities.unshift("lahore");
// cities.shift();

// var cities = ["karachi", "multan", "lahore", 123, 345, 4567, 5678];

// // var copyArr = cities.slice(1, 3);
// // var copyArr = cities.slice(1, 2);
// // var copyArr = cities.slice(1);
// var copyArr = cities.slice(0, -1);

// console.log("copyArr", copyArr);
// // console.log(cities);

// var cities = ["karachi", "multan", "lahore", 123, 345, 4567, 5678];
// cities.splice(3, 4);
// cities.splice(1, 1);
// cities.splice(1, 0, "islamabad");
// console.log("cities", cities);

// loop
// for
// console.log(1)

// for(var i = 100 ; i<=10 ; i++){
//   console.log(i)
// }

// for (var i = 10; i >= 1; i--) {
//   console.log(i);
// }

var cities = ["karachi", "multans", "lahore"];
// document.writeln(cities[0]);
// document.writeln(cities[1])
// document.writeln(cities[2])
// for (var i = 0; i < cities.length; i++) {
//   document.writeln(cities[i]);
// }

var isMatch = false;
for (var i = 0; i < cities.length; i++) {
  if (cities[i] == "multan") {
    isMatch = true;
    console.log("exist");
    break;
  }
}

if (isMatch == false) {
  console.log("not match");
}
