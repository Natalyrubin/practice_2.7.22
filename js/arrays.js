// Array is with block brackets []

// CRUD:
// C - Create
// R - Read
// U - Update
// D - Delete

// let myCar = "Mazda"
// let myArr = ["Eli", "Jerusalem", 12, false, myCar, "Hello World"];
// console.log(myArr[0]);
// myArr.push("Tom")
// for (let x = 0; x < myArr.length; x++){
//     console.log(myArr[x]);
// }

let myArr = [];

for (let x = 0; x <= 1001; x++) {
  if (x % 3 === 0 && x % 2 === 0) {
    if (x === 66 || x === 666) {
      continue;
    }
    myArr.push(x);
  }
}

//   //embeded loop

for (x = 0; x < myArr.length; x++) {
  console.log(myArr[x], x);

  // first the whole loop needs to run, and only after JS will continue

  for (let i = 0; i < 3; i++) {
    console.log("this is long");
  }
}
