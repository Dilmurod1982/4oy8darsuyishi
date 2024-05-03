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
