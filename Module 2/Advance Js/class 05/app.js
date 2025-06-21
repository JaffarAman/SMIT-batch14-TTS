const arr = [1, 2, 3, 4, 5];

// map
// const newArr = arr.map((value, index) => {
//   //   console.log(value, "value");
//   return value * 2;
// });

// filter
// const newArr = arr.filter((value) => {
//   if (value % 2 == 0) {
//     return 0;
//   }
// });

// console.log("newArr", newArr);

// fetch(api)
//   // res  convert into json
//   .then()

//   .then((success) => {})
//   .catch((error) => {});

// promise
// const myPromise = new Promise((resolve, reject) => {
//   const isCivic = true;

//   if (isCivic) {
//     resolve("Resolved");
//   } else {
//     reject("rejected");
//   }
// });

// myPromise
//   .then((response) => {
//     console.log("response", response);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

// console.log("myPromise", myPromise);

// ASYNC / AWAIT

// const fetchData = async () => {
//   console.log("hello 1");
//   const data = await APICALL();
//   console.log("hello 2");
// };

// const greet = () => {
//   try {
//     // const userName = "JAFFAR";
//     console.log("USER 1");
//     console.log("USER 2");
//     alert(userName);
//     console.log("USER 3");
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// greet();
// console.log("HELLO WORLD");

// const greet = () => {
//   try {
//     const bool = false;
//     if (bool) {
//       console.log("SUCCESS");
//     } else {
//       throw "error throw";
//     }
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// greet();
// console.log("HELLO WORLD");

// new Promise()
// .then
// .catch

// async / await
// Try Catch

// const fetchProduct = async () => {
//   try {
//     console.log("API CALLING");
//     const response = await fetch(
//       "https://fakestoreapi.com/products/"
//     ).then((res) => res.json());
//     console.log("response", response);
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// fetchProduct();
// console.log("hello world")

// class Std {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
// }

// const std1 = new Std("jaffar", 24, "male");

// console.log(std1)

// TEACHER
// std

// FIRST NAME
// LAST NAME
// AGE
// EMAIL

// STD Object
// STDid

// TEACHER OBJ
// TEACHERID

// class CommonFields {
//   constructor(name, age, email, gender) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
//     this.gender = gender;
//   }
// }

class commonField {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

class stdobj extends commonField {
  constructor(name, age, email, stdId) {
    super(name, age, email);
    this.stdId = stdId;
  }
}

class teacherobj extends commonField {
  constructor(name, age, email, teacherId) {
    super(name, age, email);
    this.teacherId = teacherId;
  }
}

const std1 = new stdobj("jaffar", 24, "jaffar@gmail.com", 101);
console.log(std1, "std1");
