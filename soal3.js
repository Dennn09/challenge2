const dataAngka = [9,4,7,7,4,3,2,2,8]

// const sort = dataAngka.sort((a, b) => b - a);
// sort.shift();
// console.log(sort[0])

// fungsi ini untuk mengetahui angka terbesar kedua
getAngkaTerbsearKedua = (personName) => {
    console.log("Data yang belum di urutkan         ",personName)   // baris ini saya menampikan data awal 
   
    const sort = personName.sort((a, b) => b - a)                    // baris ini saya menggurutkan data array dari yang terbesar ke terkecil menggunkan metode sort
    console.log("Data yang sudah di urutkan         ",sort)          //dan ini baris unutk meanmpilkan data yang sudah di sort
    
    const uniqSort = [... new Set(sort)]                             //pada baris ini saya ingin menghapus data jika ada data yang  duplikat menggunkan SET
    console.log("Data yang sudah tidak ada duplikat ",uniqSort)      // baris ini saya menampilkan data yg sudah tidak ada duplikatnya
   
    uniqSort.shift();                                                 // baris ini saya menggunkan shift dimana shift ini akan menghapus element pertama dari array, jadi otomatis  posisi angka tebesar ke dua sudah berada di index ke 0
    console.log("Jadi angka yang terbesar ke dua yaitu ",uniqSort[0]) // dsni saya memanggil array index ke 0 dimana index ini sebelumnya index 1 yang memiliki nilai terbesar ke 2 sebelum di shift
    return uniqSort[0]                                                // baris ini saya meretrun kembali nilai tersebut
}

console.log("Pesan Pertama")
getAngkaTerbsearKedua(dataAngka)
console.log("\n")

console.log("Pesan Kedua")
// -------------------
// getAngkaTerbsearKedua(0)// pada baris ini kenapa error? karena yang kita masukan itu bukan nama varibel,yg dimasukan di situ berupa value langsung yg bertipe data number dan juga function tersebut hanya akan menampung variabel array
console.log("\n")

console.log("Pesan Ketiga")
// getAngkaTerbsearKedua()// kenapa eror? sama halnya dengan di atas karena dsttu tidak diberikan nama variabel array tetpi hanya diberi kosong atau undefined

