// var stdObj = { age: 20 };

// stdObj.name = "Jaffar Aman";

// stdObj.age = 24;

// var stdObj = {
//   name: "Jaffar",
//   courses: ["html", "css", "javascript"],
//   results: {
//     html: 80,
//     css: 90,
//     js: 70,
//   },
// };

// console.log(stdObj.courses[1]);
// console.log("score", stdObj.results.css);

// var lastName = "sufiyan";

// var stdObj = {
//   firstName: "jaffar",
//   lastName: "Aman",
//   getFullName: function () {
//     // console.log("HELLO CLASS!", stdObj.firstName, stdObj.lastName);
//     // console.log(this.firstName, this.lastName);
//     var fullname = this.firstName + " " + this.lastName;
//     return fullname;
//   },
// };

// stdObj.firstName
// stdObj.getFullName()

// var stdFullName = stdObj.getFullName();
// console.log("stdFullName", stdFullName);

// var arr  = []
// var str = ""
// str.indexOf()
// arr.push()

var dummyObj = { type: "std" };

var std = {
  firstName: "muhammad",
  lastName: "sufiyan",
  age: 34,
  email: "sufiyan@gmail.com",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
  scores: {
    html: 80,
    css: 90,
    js: 40,
    react: 60,
    node: 40,
  },

  getTotalMarks: function () {
    // var total =
    //   this.scores.html + this.scores.css + this.scores.js + this.scores.react;
    // return total;
    var totals = 0;
    for (var key in this.scores) {
      console.log(key, this.scores[key]);
      totals += this.scores[key];
    }
    console.log("totals", totals);
    return totals;
  },
};

var stdFullName = std.getFullName();
console.log("stdFullName", stdFullName);

var stdTotalScore = std.getTotalMarks();
console.log("stdTotalScore", stdTotalScore);

// var totalScore = std.scores.html + std.scores.css + std.scores.js + std.scores.react;







