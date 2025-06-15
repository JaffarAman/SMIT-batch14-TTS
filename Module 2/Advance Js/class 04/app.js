// const arr = [1, 2, 3, 4, 5, 6];
// const tempArr = [];

// const newArr = arr.map((value , index ,arr) => {
// console.log("value", value);
// console.log("index", index);
// console.log("arr", arr);

//   return value * 2;

//   if (value % 2 == 0) {
//     // console.log(value);
//     return value * 2;
//   } else {
//     return value;
//   }

//   // return true
// });

// console.log("newArr", newArr);
// console.log("arr", arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] * 2);
//   tempArr.push(arr[i] * 2);
// }

// console.log(arr);
// console.log("temparr", tempArr);

// map

// var str = "jaffar"
// str.map()

// filter

// const arr = [1, 2, 3, 4, 5, 6];
// const newArr = arr.filter((value, index, arr) => {
//   console.log("value", value);
//   if (value % 2 == 0) {
//     return 1;
//   }
// });

// console.log("newArr", newArr);

// find | findIndex
// const arr = [1, 2, 3, 4, 5, 6];

// const findValue = arr.findIndex((value, index) => {
//   if (value % 2 == 0) {
//     return value;
//   }
// });
// console.log("findValue", findValue);

// const arr = [1, 2, 3, 4, 5, 6];

// for (var value of arr) {
//   console.log("value", value);
// }

// const newArr = arr.forEach((value, index) => {
//   console.log("value", value);
// });

// console.log("newArr" , newArr)

// fetch
// fetch("https://fakestoreapi.com/products")
//   .then(res=>{
//       return res.json()
//   })

// .then((success) => {
//     console.log("success", success);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

const myPromise = new Promise((resolve, reject) => {
  const APICALL = true;

  if (APICALL) {
    resolve([{ name: "JAFFAR" }]);
  } else {
    reject("SOMETHING WENT WRONG!");
  }
})
  .then((result) => {
    console.log(result, "result");
  })
  .catch((err) => {
    console.log("err", err);
  });

// console.log("myPromise", myPromise);
