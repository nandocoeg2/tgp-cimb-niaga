const karyawan = [
  "Andi",
  "Budi",
  "Caca",
  "Deni",
  "Euis",
  "Faza",
  "Reza",
  "Zara",
  "Zaki",
  "Rizki",
  "Rizka",
  "Rizky",
];

// function pengaturanTempatDuduk(karyawan, kolom) {
//   let tempatDuduk = [];
//   let index = 0;

//   for (let i = 0; i < karyawan.length; i++) {
//     if (tempatDuduk[index] === undefined) {
//       tempatDuduk[index] = [];
//     }

//     tempatDuduk[index].push(karyawan[i]);

//     if (i === karyawan.length - 1) {
//       for (let j = tempatDuduk[index].length; j < kolom; j++) {
//         tempatDuduk[index].push("Kursi Kosong");
//       }
//     }
//     if (tempatDuduk[index].length === kolom) {
//       index++;
//     }
//   }

//   return tempatDuduk;
// }

// function pengaturanTempatDuduk(karyawan, kolom) {
//   const tempatDuduk = [];

//   for (let i = 0; i < karyawan.length; i++) {
//     const row = Math.floor(i / kolom);
//     if (!tempatDuduk[row]) {
//       tempatDuduk[row] = Array(kolom).fill("Kursi Kosong");
//     }
//     tempatDuduk[row][i % kolom] = karyawan[i];
//   }

//   return tempatDuduk;
// }

function pengaturanTempatDuduk(karyawan, kolom) {
  const jumlahRow = Math.ceil(karyawan.length / kolom);
  const tempatDuduk = Array.from({ length: jumlahRow }, () =>
    Array(kolom).fill("Kursi Kosong")
  );

  karyawan.map((karyawan, index) => {
    const row = Math.floor(index / kolom);
    const column = index % kolom;

    tempatDuduk[row][column] = karyawan;
  });

  return tempatDuduk;
}

console.log(pengaturanTempatDuduk(karyawan, 5));

console.log("====================================");
const nasabah = [
  { nama: "Andi", nilaiKredit: 80, kelasKredit: "Platinum" },
  { nama: "Budi", nilaiKredit: 60, kelasKredit: "Gold" },
  { nama: "Caca", nilaiKredit: 40, kelasKredit: "Silver" },
  { nama: "Deni", nilaiKredit: 90, kelasKredit: "Platinum" },
  { nama: "Euis", nilaiKredit: 70, kelasKredit: "Gold" },
  { nama: "Faza", nilaiKredit: 50, kelasKredit: "Silver" },
  { nama: "Reza", nilaiKredit: 85, kelasKredit: "Platinum" },
  { nama: "Zara", nilaiKredit: 65, kelasKredit: "Gold" },
  { nama: "Zaki", nilaiKredit: 45, kelasKredit: "Silver" },
  { nama: "Rizki", nilaiKredit: 75, kelasKredit: "Gold" },
  { nama: "Rizka", nilaiKredit: 55, kelasKredit: "Silver" },
  { nama: "Rizky", nilaiKredit: 95, kelasKredit: "Platinum" },
];
function daftarNasabahLolos(nasabah) {
  let nasabahLolos = [];
  nasabah.map((item) => {
    if (item.nilaiKredit >= 70) {
      nasabahLolos.push(item);
    }
  });

  const kelasKredit = {};
  nasabahLolos.map((item) => {
    if (!kelasKredit[item.kelasKredit]) {
      kelasKredit[item.kelasKredit] = [];
    }
  });

  console.log(kelasKredit);

  nasabahLolos.map((item) => {
    kelasKredit[item.kelasKredit].push({
      nama: item.nama,
      nilaiKredit: item.nilaiKredit,
    });
  });

  return kelasKredit;
}

console.log(daftarNasabahLolos(nasabah));
