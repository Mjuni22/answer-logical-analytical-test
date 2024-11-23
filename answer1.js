class AirQualityData {
  constructor() {
    this.data = [];
  }

  ingest(token) {
    this.data.push(token);
  }

  appearance(prefix) {
    const total = this.data.length;
    const count = this.data.reduce((acc, token) => {
      return token.startsWith(prefix) ? acc + 1 : acc;
    }, 0);
    return count / total || 0;
  }
}

// Contoh penggunaan
const data = new AirQualityData();
data.ingest("area1:pm25:55");
data.ingest("area1:temperature:25");
data.ingest("area2:pm25:40");

console.log(data.appearance("area1")); // Output: 0.6666666666666666

// Penjelasan Time Complexity
// Time complexity: O(n)
// Struktur data yang digunakan untuk menyimpan token adalah list.
// Setiap pemrosesan token membutuhkan waktu linear dengan jumlah token.
// Kompleksitas ruang keseluruhan adalah O(n). Artinya, ruang yang digunakan program akan tumbuh secara linear seiring dengan bertambahnya jumlah token yang diproses.
// Kompleksitas waktu terburuk dari fungsi appearance adalah O(n). Ini terjadi ketika kita mencari prefix yang tidak ada sama sekali, sehingga iterasi melalui semua token diperlukan.
