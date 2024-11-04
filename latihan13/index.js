const pelanggan = [
  {
    id_pelanggan: 1,
    nama_pelanggan: "John Doe",
    saldo_awal: 150000,
    riwayat_transaksi: [
      { type: "debit", amount: 50000 },
      { type: "kredit", amount: 100000 },
    ],
  },
  {
    id_pelanggan: 2,
    nama_pelanggan: "Jane Doe",
    saldo_awal: 200000,
    riwayat_transaksi: [
      { type: "kredit", amount: 150000 },
      { type: "debit", amount: 100000 },
    ],
  },
  {
    id_pelanggan: 3,
    nama_pelanggan: "Bob Smith",
    saldo_awal: 50000,
    riwayat_transaksi: [
      { type: "debit", amount: 20000 },
      { type: "kredit", amount: 10000 },
    ],
  },
];

function hitungSaldoAkhir(pelanggan) {
  return pelanggan.map((data) => {
    let saldo = data.saldo_awal;
    data.riwayat_transaksi.forEach((transaksi) => {
      if (transaksi.type === "debit") {
        saldo -= transaksi.amount;
      } else {
        saldo += transaksi.amount;
      }
    });
    return {
      id_pelanggan: data.id_pelanggan,
      nama_pelanggan: data.nama_pelanggan,
      saldo_akhir: saldo,
    };
  });
}

function filterSaldoRendah(pelanggan) {
  return pelanggan.filter((data) => data.saldo_akhir < 100000);
}

function totalDebit(pelanggan) {
  return pelanggan.reduce((total, data) => {
    return (
      total +
      data.riwayat_transaksi
        .filter((transaksi) => transaksi.type === "debit")
        .reduce((total, transaksi) => total + transaksi.amount, 0)
    );
  }, 0);
}

function main() {
  const saldoAkhir = hitungSaldoAkhir(pelanggan);
  const saldoRendah = filterSaldoRendah(saldoAkhir);
  const totalDebitPelanggan = totalDebit(pelanggan);

  console.log("Saldo Akhir Pelanggan:");
  console.table(saldoAkhir);

  console.log("Pelanggan dengan saldo rendah:");
  console.log("Pelanggan dengan saldo rendah:");
  console.table(saldoRendah);
  console.log("Total Debit Pelanggan:");
  console.log(totalDebitPelanggan);
}

main();
