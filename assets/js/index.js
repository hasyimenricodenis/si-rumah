// === Kalkulator Kehamilan ===
function hitungKehamilan() {
  let hphtInput = document.getElementById("hpht").value;
  if (!hphtInput) {
    alert("Masukkan tanggal HPHT terlebih dahulu!");
    return;
  }

  let hpht = new Date(hphtInput);

  // Rumus HPL: HPHT + 280 hari (40 minggu)
  let hpl = new Date(hpht);
  hpl.setDate(hpl.getDate() + 280);

  // Usia kehamilan
  let today = new Date();
  let selisihHari = Math.floor((today - hpht) / (1000 * 60 * 60 * 24));
  let minggu = Math.floor(selisihHari / 7);
  let sisaHari = selisihHari % 7;

  // Trimester
  let trimester = "";
  if (minggu < 14) {
    trimester = "Trimester 1";
  } else if (minggu < 28) {
    trimester = "Trimester 2";
  } else {
    trimester = "Trimester 3";
  }

  // Perkiraan konsepsi = HPHT + 14 hari
  let konsepsi = new Date(hpht);
  konsepsi.setDate(konsepsi.getDate() + 14);

  // Tampilkan hasil
  document.getElementById("hasil").innerHTML = `
    <p><strong>Hari Perkiraan Lahir (HPL):</strong> ${hpl.toLocaleDateString("id-ID")}</p>
    <p><strong>Usia Kehamilan:</strong> ${minggu} minggu ${sisaHari} hari</p>
    <p><strong>Trimester:</strong> ${trimester}</p>
    <p><strong>Perkiraan Tanggal Konsepsi:</strong> ${konsepsi.toLocaleDateString("id-ID")}</p>
  `;
}
