const dataPenjualanPakAldi = [{
    namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
},
{
    namaProduct: 'Sepatu Warrior Tristan Black Brown High',
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
},
{
    namaProduct: 'Sepatu Warrior Tristan Maroon High ',
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
},
{
    namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy',
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
}
]

// let operasiPenjumlahan = ''

// operasiPenjumlahan += dataPenjualanPakAldi[1].totalTerjual

// console.log(operasiPenjumlahan)




hitungTotalPenjualan = (dataPenjualan) => {
let keseluruhanTerjual = 0 //pada baris ini saya membuat varibel yang nnti akan memnampung keseluruhan totalTerjual
let operasiPenjumlahan = ''//baris ini saya membuat variabel yang akan menampung tipe data string 

if (typeof(dataPenjualan)=== "object") {
    for (let i = 0; i < dataPenjualan.length; i++) { // dsni saya membuat perulangan dimana saya melakukan increment, dimana kondisinya perulangannya akan mengeloop sesuai dari index aray
        keseluruhanTerjual += dataPenjualan[i].totalTerjual // baris ini saya menampung total hasil atau menampung nilai nanti yang akan ditambah sesui dari index arry tersebut dengan menngukan key totalTerjual

        
        operasiPenjumlahan += dataPenjualan[i].totalTerjual  //baris ini nanti uang akan menampung index yang akan di looping dengan bertipe data string operasi penjumblahan yg nnti akan di tampilkan 

       
        if (i < dataPenjualan.length - 1) { // dsni saya membuat kondisi nanti akan menampilkan + dengan bertipe data string
            operasiPenjumlahan += ' + '
        }
    }

    
}



console.log(operasiPenjumlahan, " = ",keseluruhanTerjual ) // dsni saya menampilkan hasil output dari fungsi yg sudah di jalankan

return keseluruhanTerjual//baris ini yg nnti akan mengembalikan nilai 
}

const totalKeseluruhanTerjual = hitungTotalPenjualan(dataPenjualanPakAldi)
console.log('Total Terjual:', totalKeseluruhanTerjual)





