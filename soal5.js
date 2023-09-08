const dataPenjualanNovel = [{
    idProduct: 'BOOK002421',
    namaProduk: 'Pulang - Pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: 'BOOK002351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];


getInfoPenjualan = (dataPenjualan) => {
  let totalKeuntungan = 0
  let totalModal = 0
  let persentaseKeuntungan = 0
  let produkBukuTerlaris = dataPenjualan[0]
  const penulisTerlaris = {}

  if (typeof dataPenjualan === "object") {
    for (let i = 0; i < dataPenjualan.length; i++) {
      const modalPerProduk = (dataPenjualan[i].totalTerjual + dataPenjualan[i].sisaStok) * dataPenjualan[i].hargaBeli
      const keuntunganPerProduk = (dataPenjualan[i].hargaJual - dataPenjualan[i].hargaBeli) * dataPenjualan[i].totalTerjual

      totalModal += modalPerProduk
      totalKeuntungan += keuntunganPerProduk

      if (dataPenjualan[i].totalTerjual > produkBukuTerlaris.totalTerjual) {
        produkBukuTerlaris = dataPenjualan[i]
      }
    }

    
    dataPenjualan.forEach((item) => {
      const { penulis, totalTerjual } = item
      if (!penulisTerlaris[penulis]) {
        penulisTerlaris[penulis] = 0
      }
      penulisTerlaris[penulis] += totalTerjual
    });

   
    let penulisPalingTerlaris = null
    let totalTerjualTerbanyak = 0

    for (const penulis in penulisTerlaris) {
      if (penulisTerlaris[penulis] > totalTerjualTerbanyak) {
        penulisPalingTerlaris = penulis
        totalTerjualTerbanyak = penulisTerlaris[penulis]
      }
    }

    persentaseKeuntungan = (totalKeuntungan / totalModal) * 100

    console.log('Total Modal: Rp.' + totalModal.toLocaleString("id-ID"))
    console.log('Total Keuntungan: Rp.' + totalKeuntungan.toLocaleString("id-ID"))
    console.log('Persentase Keuntungan:', persentaseKeuntungan.toFixed(2) + '%')
    console.log('Produk Buku Terlaris:', produkBukuTerlaris.namaProduk)
    console.log('Penulis Terlaris:', penulisPalingTerlaris)

    return penulisPalingTerlaris
  }else{
    console.log("validasi tipe data")
  }
}



getInfoPenjualan(dataPenjualanNovel)