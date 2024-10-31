function hitungSimpanan() {
  var tipeSimpanan = parseFloat(document.getElementById("tipe_simpanan").value);
  var simpanan = parseFloat(document.getElementById("simpanan").value);
  var bunga = parseFloat(document.getElementById("bunga").value);
  var hasil = document.getElementById("results");

  if (tipeSimpanan === 1) {
    hasil.value = simpanan + bunga;
  } else {
    hasil.value = (simpanan * bunga) / 100;
  }
}

let daftar_anggota = [];
let totalSimpanan = 0;

function tambahAnggota() {
  var nama_anggota = document.getElementById("nama_anggota").value;
  var duit_anggota = document.getElementById("duit_anggota").value;
  var listAnggota = document.getElementById("daftar_anggota");
  const length = document.getElementById("daftar_anggota").children.length;
  console.log(length);
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(nama_anggota));
  li.appendChild(document.createTextNode(" - "));
  li.appendChild(document.createTextNode(duit_anggota));
  li.setAttribute("id", "anggota-" + (length + 1));

  var deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("Delete"));
  deleteButton.setAttribute("onclick", "deleteAnggota(" + (length + 1) + ")");
  li.appendChild(deleteButton);

  listAnggota.appendChild(li);
  document.getElementById("daftar_anggota").value = "";

  totalSimpanan = totalSimpanan + parseFloat(duit_anggota);
  daftar_anggota.push({ nama: nama_anggota, simpanan: duit_anggota });

  document.getElementById("total_duit_anggota").value = totalSimpanan;
}

function deleteAnggota(id) {
  console.log(id);
  var anggota = document.getElementById("anggota-" + id);
  var nama = anggota.innerText.split(" - ")[0];
  var simpanan = anggota.innerText.split(" - ")[1];
  totalSimpanan = totalSimpanan - parseFloat(simpanan);
  document.getElementById("total_duit_anggota").value = totalSimpanan;
  daftar_anggota = daftar_anggota.filter((item) => item.nama !== nama);
  anggota.remove();
}
