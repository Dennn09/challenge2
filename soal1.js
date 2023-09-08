
// const kalimat1 = 'Adini sangat mencitai kamu selamanya'
// const kalimat2 = 'Gunung bromo tak akan mampu mengambarkan besarnya cintaku padamu'
// const Data1 = Data[0].replace('mencintai', 'membenci')
// console.log(Data1)

// Pertama saya membuat sebuah Arayy unutk menampung sebuah kalimat
const Data = [
    kalimat1 = 'Adini sangat mencintai kamu selamanya',
    kalimat2 = 'Gunung bromo tak akan mampu mengambarkan besarnya cintaku padamu'
]



// Untuk function nya saya hanya membuat untuk menganti nilainya saja
changeWord = (selectedText, chanageText, Text)=>{
    const kalimat = Text.replace(selectedText, chanageText)  //disini saya membuat variabel baru kalimat yang berada di dalam function untuk menampung parameternya 
    return kalimat  //saya mereturn kembali niali yang sudah di ganti ke varibel kalimat unutk di simpan

}

//karena di dalam function saya tidak untuk langsung menampilkan kalimat yg sudah diganti(console.log) jadi saya membuatnya dsni
const kalimatBaru1 = changeWord('mencintai', 'membenci', Data[0]) //saya membuat variabel baru yg berfungsi untuk menampung value dari function yaang mau kita eksekusi
console.log('kalimat1  =',kalimatBaru1) //saya memanggil variabel yang di dalamnya sudah ada function trus langsung menampilkan hasil dari function tersebut

const kalimatBaru2 = changeWord('bromo', 'semeru', Data[1]) 
console.log('kalimat2  =',kalimatBaru2) 

