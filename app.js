// 1. დაწერეთ პროგრამა მასივში ელემენტის ინდექსის საპოვნელად

// function findIndex(arr, element) {
//     // return arr.indexOf(element);

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//             return i;
//         }
//     }

//     return -1;
// }

// console.log(findIndex([1, 2, 3], 3));

// 2. დაწერეთ პროგრამა, რომელიც დაადგენს მდებარეობს თუ არა მასივში კონკრეტული ელემენტი

// function includes(arr, element) {
//     // return arr.includes(element);

//     for (let number of arr) {
//         if (number === element) {
//             return true;
//         }
//     }

//     // for (let i = 0; i < arr.length; i++) {
//     //     if (arr[i] === element) {
//     //         return true;
//     //     }
//     // }

//     return false;
// }

// console.log(includes([1, 2, 3], 2));

// 3. დაწერეთ ფუნქცია, რომელიც აბრუნებს ობიექტში ფროფერთის სახელების(key) და მნიშვნელობების(value) მასივს.

// const keyValue = obj => {
//   return [Object.keys(obj), Object.values(obj)];

//     let keys = [];
//     let values = [];

//   for (let key in obj) {
//       values.push(obj[key]);
//       keys.push(key);
//   }

//   return [keys, values]
// }

// let object = {
//     name: "temo",
//     age: 18,
// }

// console.log(keyValue(object));

// 4. დაწერეთ პროგრამა, რომელიც რიცხვების მასივიდან გააცალკევებს ლუწ და კენტ რიცხვებს

// const evenOdd = function (arr) {
//     let obj = {
//         even: [],
//         odd: []
//     }

//     for (let number of arr) {
//         if (number % 2 === 0) {
//             obj.even.push(number)
//         } else {
//             obj.odd.push(number);
//         }
//     }

//     return obj
// }

// console.log(evenOdd([1, 2, 3, 4]))
