// console.log("HELLO WORLD");

// var str = "With HTML you can create your own Website.";
// console.log(str[34]);
// find "Website" index num
// for (var i = 0; i < str.length; i++) {
//   // console.log(str.slice(i, i + 7));
//   if (str.slice(i, i + 7) == "Website") {
//     console.log(i, "indexNumber");
//     break;
//   }
// }

// find "HTML" index number
// for (var i = 0; i < str.length; i++) {
//   console.log(str.slice(i, i + 4));
//   if (str.slice(i, i + 4) == "HTML") {
//     console.log(i);
//     break;
//   }
// }

// 1.find index number
// 2. replace a word

// with
// HTML
//  you

//  with + "HYPER TExT" + you
//replace a word
// var str = "With HTML you can create your own Website.";
// for (var i = 0; i < str.length; i++) {
//   if (str.slice(i, i + 4) == "HTML") {
//     console.log(i);
//     var leftSide = str.slice(0, i);
//     var rightSide = str.slice(i + 4);
//     console.log(leftSide + "HYPER TEXT" + rightSide);
//     break;
//   }
// }

// find index
// var str = "With HTML you can create HTML your own Website.";
// console.log(str.indexOf("HTML"));
// console.log(str.lastIndexOf("HTML"));
// console.log(str[18]);
// var str = "saylani";

// var arr = ["lahore", "karachi"];
// var indexNum = arr.indexOf("lahore");
// console.log("indexNum", indexNum);
// if (indexNum == -1) {
//   alert("not found");
// } else {
//   alert("welcome");
// }

// replace
// var str = "With HTML you can create HTML your own Website.";
// var replaceStr = str.replaceAll("HTML", "HYPER TEXT");
// console.log(replaceStr);

// 1. indexOf => return indexNumber
// 2. replace => replace word
// 3. replaceAll => replace same word multiply time
// 4. lastIndexOf => return last value index
// 5. charAt  => return char
// 6. Math.round
// 7. Math.floor
// 8. Math.ceil

// var str = "saylani";
// console.log(str.charAt(0));
// console.log(str[0]);

// 98.99546
// 99

// var num1 = 79.6654651465;
// // var numRound = Math.round(num1);
// // console.log(numRound, "numRound");
// // var numFloor = Math.floor(num1);
// // console.log(numFloor, "numFloor");
// var numCeil = Math.ceil(num1);
// console.log(numCeil, "numCeil");
// console.log(num1);
