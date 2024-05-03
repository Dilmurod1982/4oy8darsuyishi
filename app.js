// 1 vazifa

// function getLevel2(n) {
//   let result = [];
//   for (let i = 1; i <= n; i++) {
//     result.push(Math.pow(2, i));
//   }
//   return result;
// }

// console.log(getLevel2(5));

// Math.pow bu berilgan sonni ko'rsatilgan daraja oshiradi

// 3 vazifa

// function reverse(n) {
//   n.reverse();
//   return n;
// }
// console.log(reverse([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 4 vazifa

// function toqSon(arr) {
//   let sonlar = arr.filter((num) => num % 2 !== 0);
//   let toqSonlar = sonlar.sort((a, b) => a - b);

//   console.log("Massiv elementlari", toqSonlar.join(" "));
//   console.log("Toq sonlar jami:", toqSonlar.length);
// }

// let elements = [4, 5, 7, 8, 6, 9];
// toqSon(elements);

// 5 vazifa

// function sonlar(arr) {
//   let juftSonlar = arr.filter((num) => num % 2 === 0);
//   let toqSonlar = arr.filter((num) => num % 2 !== 0).reverse();

//   let result = juftSonlar.concat(toqSonlar);

//   console.log(`Natija ${result} `);
// }

// let elements = [4, 5, 7, 8, 6, 9];
// sonlar(elements);

// 6 vazifa

// function juftSon(arr) {
//   let result = arr.filter((index) => index % 2 == 0);
//   console.log("Natija:", result);
// }

// let elements = [1, 2, 3, 4, 5, 6];
// juftSon(elements);

// 7 vazifa

// function generateReverseArray(arr) {
//   let result = arr.filter((index) => index % 2 == 0).reverse();
//   console.log("Natija:", result);
// }

// let elements = [1, 2, 3, 4, 5, 6];
// generateReverseArray(elements);

// 8 vazifa

// function sonlar(arr) {
//   let juftSonlar = arr.filter((index) => index % 2 == 0);
//   let toqSonlar = arr.filter((index) => index % 2 != 0);
//   console.log("Juft sonlar", juftSonlar);
//   console.log("Toq sonlar:", toqSonlar);
// }

// let elements = [1, 2, 3, 4, 5, 6];
// sonlar(elements);

// 9 vazifa

// function sonlar(arr) {
//   let juftSonlar = arr.filter((index) => index % 2 == 0).reverse();
//   let toqSonlar = arr.filter((index) => index % 2 != 0);

//   console.log(`${toqSonlar},${juftSonlar}`);
// }

// let elements = [1, 2, 3, 4, 5, 6];
// sonlar(elements);

// 10 vazifa

// 11 vazifa

// function rangeOutSum(arr, k, l) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i < k || i > l) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }
// let array = [1, 2, 3, 4, 5];
// let k = 1;
// let l = 3;
// console.log("Elementlar yeg'indisi:", rangeOutSum(array, k, l));

// 12 vazifa

// function truthyFalsy(arr) {
//   let truthy = arr.filter((item) => item);
//   let falsy = arr.filter((item) => !item);
//   console.log("true:", truthy);
//   console.log("false:", falsy);
// }

// let values = [10, false, "", "Abdulaziz", null];
// truthyFalsy(values);

// 13 vazifa

// function getOddMin(arr) {
//   let filter = arr.filter((index) => index % 2 == 0);
//   return Math.min(...filter);
// }

// let numbers = [5, 2, 8, 1, 4, 9];
// console.log("Juft index eng kichik son:", getOddMin(numbers));

// 14 vazifa

// function getEvenMax(arr) {
//   let filter = arr.filter((index) => index % 2 != 0);
//   return Math.max(...filter);
// }

// let numbers = [5, 2, 8, 1, 4, 9];
// console.log("Toq index eng katta son:", getEvenMax(numbers));
