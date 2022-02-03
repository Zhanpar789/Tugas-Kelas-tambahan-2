function array(nilai) {
  const hasil = nilai.map (el => {
    const arrayBaru = ""
    return el += arrayBaru
  })
  const potong = hasil[3].split(',')
  hasil.pop()
  console.log(hasil ,potong.join(' '));
}
array(['hallo','nama','saya',['Zhanpar','Isman', ['kelas',['11', [`rpl 1`]]]]])

// function array(nama,kelas) {
//   console.log(nama);
//   console.log(kelas);
// }
// console.log(['Hallo', 'Nama', 'Saya'], "Zhanpar", "XI RPL 1");