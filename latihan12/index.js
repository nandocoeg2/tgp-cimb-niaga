// function mapWithForLoop() {
//   const harga = [19.99, 4.95, 25, 3.5];
//   let harga_sekarang = [];
//   for (let i = 0; i < harga.length; i++) {
//     harga_sekarang.push(harga[i] * 1.25);
//   }

//   return harga_sekarang;
// }

// console.log(mapWithForLoop());

// function mapWithMap() {
//   const harga = [19.99, 4.95, 25, 3.5];
//   return (harga_sekarang = harga.map((harga) => harga * 1.25));
// }

// console.log(mapWithMap());

// function filterOdd() {
//   const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1231];
//   let angka_ganjil = [];
//   for (let i = 0; i < angka.length; i++) {
//     if (angka[i] % 2 !== 0) {
//       angka_ganjil.push(angka[i]);
//     }
//   }

//   return angka_ganjil;
// }

// console.log(filterOdd());

// function filterWithFilter() {
//   const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   return (angka_ganjil = angka.filter((angka) => angka % 2 !== 0));
// }

// console.log(filterWithFilter());

// function findWithForLoop() {
//   const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let angka_ganjil = [];
//   for (let i = 0; i < angka.length; i++) {
//     if (angka[i] % 2 !== 0) {
//       angka_ganjil = angka[i];
//       break;
//     }
//   }

//   return angka_ganjil;
// }

// console.log(findWithForLoop());

// function findWithFind() {
//   const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   return (angka_ganjil = angka.find((angka) => angka % 2 !== 0));
// }

// console.log(findWithFind());

// const studentList = [
//   { name: "John", score: 80, is_graduated: true },
//   { name: "Jane", score: 95, is_graduated: true },
//   { name: "Doe", score: 73, is_graduated: false },
// ];

// function isAllPass() {
//   return studentList.every((student) => student.score >= 75);
// }

// console.log(isAllPass());

// function isSomePass() {
//   return studentList.some((student) => student.is_graduated === true);
// }

// console.log(isSomePass());

// function sumWithForLoop() {
//   const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let total = 0;
//   for (let i = 0; i < angka.length; i++) {
//     total += angka[i];
//   }

//   return total;
// }

// console.log(sumWithForLoop());

// function sumWithReduce() {
//   const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   return angka.reduce((total, angka) => total + angka, 0);
// }

// console.log(sumWithReduce());

// function sumScoreWithReduceObject() {
//   return studentList.reduce((total, student) => total + student.score, 0);
// }

// console.log(sumScoreWithReduceObject());

function removeSpaces(text) {
  return text.split(" ").join("");
}

function reverseText(text) {
  return text.split("").reverse().join("");
}

function updateVowels(text) {
  return text
    .split("")
    .map((char) => {
      if (char === "a") {
        return "b";
      } else if (char === "i") {
        return "h";
      } else if (char === "u") {
        return "v";
      } else if (char === "e") {
        return "f";
      } else if (char === "o") {
        return "p";
      } else {
        return char;
      }
    })
    .join("");
}

console.log(removeSpaces("hacktiv 8"));
console.log(reverseText("hacktiv 8"));
console.log(updateVowels("hacktiv 8"));

console.log(updateVowels(reverseText(removeSpaces("hacktiv 8"))));
