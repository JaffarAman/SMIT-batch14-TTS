// console.log("hello world");

// var str = "Jaffar Aman";
// console.log(str[0])
// console.log(str[str.length - 1]);
// console.log("str", str.length);

// slice
// var str = "Pakistani";
// var code = str.slice(0, -1);

// console.log(str);
// console.log(code, "code");

// var city = prompt("enter your city!").toLowerCase();
// var city = prompt("enter your city!").toUpperCase();
// console.log("city", city.toLowerCase());
// console.log("city", city.toUpperCase());

// console.log("city", city);

// if (city === "KARACHI") {
//   alert("welcome to karachi");
// } else {
//   alert("welcome!");
// }

// var str = "string";
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// var str = "quaiD";
// var firstLetter = str[0].toUpperCase(); //q  > Q
// var otherWords = str.slice(1).toLowerCase(); //uaiD > uaid

// var cap = firstLetter + otherWords;
// console.log("firstLetter", firstLetter);
// console.log("otherWords", otherWords);
// console.log("cap", cap);

// var str = "quaiD";
// var cap = str[0].toUpperCase() + str.slice(1).toLowerCase();
// console.log("cap", cap);

var htmlString =
  "Hypertext Markup Language is the standard markup language[a] for  (HTML) documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript, a programming language.";
  
  console.log("htmlString", htmlString[66]);
  
for (var i = 0; i < htmlString.length; i++) {
  // console.log(htmlString.slice(i, i + 6));
  if (htmlString.slice(i, i + 6) == "(HTML)") {
    // console.log("index Number ", i);
    // break;
  }
}
