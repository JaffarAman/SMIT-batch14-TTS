var i = 1;

// i = i + 2;
// i += 2;
// i++;
// console.log(i + 1);
// console.log(i);

// var cities = [
//   "karachi",
//   "lahore",
//   "multan",
//   "Islamabad",
//   "delhi",
//   "nepal",
//   "srilank",
// ];

// for (var i = 0; i <= 6; i++) {
//   //   console.log(i);
//   console.log(cities[i]);
// }

// console.log(cities[0]);
// console.log(cities[1]);
// console.log(cities[2]);
// console.log(cities[3]);
// console.log(cities[4]);

// var cities = ["karachi", "lahore", "multan", "abcd"];
// console.log(cities.length);

// for (var index = 0; index < 2; index++) {
// //   console.log("index", index);
//     console.log(cities[index]);
// }

// var arr = ["apple", "orange", "banana", "mango"];
// // document.write(arr[0])
// for (var index = 0; index < arr.length; index++) {
//   //   console.log("index", index);
//   document.write(index + 1 + arr[index] + "<br />");
// }

// var arr = ["apple", "orange", "banana", "mango"];
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (var i = arr.length; i >= 0; i--) {
//   console.log(i);
//   console.log(arr[i]);
// }
var scoreArr = [];

var htmlScore = +prompt("Enter HTml Score");
var cssScore = +prompt("Enter CSS Score");
var jsScore = +prompt("Enter javaScript Score");

scoreArr.push(htmlScore, cssScore, jsScore);
console.log("scoreArr", scoreArr);

for (var i = 0; i < scoreArr.length; i++) {
  document.write(scoreArr[i], "<br />");
}
