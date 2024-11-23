function iter(n) {
  if (n < 2) {
    throw new Error("Input tidak valid");
  }

  let result = 0;
  for (let i = 2; i <= n; i++) {
    result += 1 / (i * (i - 1));
  }
  return result;
}

// Untuk menghilangkan rekursi, kita bisa menggunakan loop untuk melakukan perhitungan secara berulang.
