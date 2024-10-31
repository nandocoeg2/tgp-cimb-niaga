let user = {
  name: "John",
  age: 30,
  isMarried: false,
  studentScore: 80,
  school: null,
};

let users = [
  {
    name: "John",
    age: 30,
    isMarried: false,
    studentScore: 80,
    school: null,
  },
  {
    name: "Jane",
    age: 25,
    isMarried: true,
    studentScore: 95,
    school: {
      name: "SMK 1 Malang",
      address: "Jl. Soekarno Hatta No. 10",
      city: "Malang",
    },
  },
  {
    name: "Bob",
    age: 35,
    isMarried: true,
    studentScore: 70,
    school: {
      name: "SMA 1 Surabaya",
      address: "Jl. Ahmad Yani No. 2",
      city: "Surabaya",
    },
  },
  {
    name: "Mike",
    age: 26,
    isMarried: false,
    studentScore: 60,
    school: {
      name: "SMA 1 Jakarta",
      address: "Jl. Sudirman No. 1",
      city: "Jakarta",
    },
  },
  {
    name: "Alice",
    age: 27,
    isMarried: true,
    studentScore: 75,
    school: {
      name: "SMA 1 Bandung",
      address: "Jl. Gatot Subroto No. 2",
      city: "Bandung",
    },
  },
];

/**
 * A = 90 - 100
 * B = 80 - 89
 * C = 70 - 79
 * D = 60 - 69
 * E = 0 - 59
 *
 * @param {number} score
 * @typedef {Object} user
 * @typedef {Array} users
 * @property {string} name
 * @property {number} age
 * @property {boolean} isMarried
 * @property {number} studentScore
 * @returns {string} grade
 *
 */

function getGrade(score) {
  let grade = "F";
  if (score >= 90 && score <= 100) {
    grade = "A";
  } else if (score >= 80 && score <= 89) {
    grade = "B";
  } else if (score >= 70 && score <= 79) {
    grade = "C";
  } else if (score >= 60 && score <= 69) {
    grade = "D";
  } else if (score >= 0 && score <= 59) {
    grade = "E";
  }
  return grade;
}

// users.map((user) => {
//   let grade = getGrade(user.studentScore);
//   let school = user.school ? user.school.name : "Tidak Sekolah";
//   console.log(
//     `Nama: ${user.name}, Umur: ${user.age}, Status: ${
//       user.isMarried ? "Menikah" : "Belum Menikah"
//     }, Nilai: ${user.studentScore}, Grade: ${grade}, Sekolah: ${school}`
//   );
// });

// users.map((user) => {
//   if (user.studentScore > 60) {
//     for (let i = 0; i < 50; i++) {
//       console.log(` ${user.name} akan belajar lebih giat lagi`);
//     }
//   }
// });

//  *********************************

// input : [80, 30, 60, 55, 32, 60, 10, 70, 90, 12]
// search : 100
// output : [90, 10] => 90 + 10 = 100 / 10 + 90 = 100

const test = [80, 30, 60, 55, 32, 60, 10, 70, 90, 12];
const search = 100;

function findPair(test, search) {
  let result = [];
  for (let i = 0; i < test.length; i++) {
    for (let j = i + 1; j < test.length; j++) {
      if (test[i] + test[j] === search) {
        result.push([test[i], test[j]]);
      }
    }
  }
  return result;
}

// console.log(findPair(test, search));

//  *********************************
