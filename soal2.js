// const angka = 12

// const hasilModulo = angka % 2 

// console.log(typeof (hasilModulo), hasilModulo)

// if (hasilModulo == 0) {
//     console.log("Angka Genap")
// }else{
//     console.log('Angka Ganjil')
// }



// Disni saya membuat function yang berfungsi mendeteksi apakah sebuah angka termasuk angka genap atau ganjil.
checkTypeNumber = (givenNumber) => {
    if (typeof givenNumber === 'number') {  //saya membuat percabangan dengan kondisi jika value yg di masukan berupa tipe data number makan akan langsung di eksekusi 
        const hasilModulo = givenNumber % 2 //dsini sya membuat modulo yang akan habis di bagi 2, jika sisa bagi nya 1 maka akan mengoutput ganjil sedangkan kalau sisa bagi nya 0 maka akan mengoutput genap
        if (hasilModulo === 0) {
            console.log("Angka Genap")
        } else {
            console.log('Angka Ganjil')
        }
    } else if (givenNumber === undefined) { // Untuk kondisi ini jika tipe data nya masih undefined atau tipe data nya belum di ketahui maka kondisi ini akan terjalankan
        console.log('Bro where is the parameter?')
    } else {                                // sendangkan ini jika tipe data selain number maka ini yang terjalankan
        console.log("invalid data type")
    }


}

checkTypeNumber();

// pada soal nomor 2 ni saya dapat mengetahui bedanya == sama === 


