// tugas berdasarkan data dibawah
// soal
// 1.Buatkan fungsi dengan menggunkan promise untuk menjalankan tugas berdasarkan data di bawah
// jalankan pada http://localhost:7000

const tugas = [
    {nama: "A",hasil:true,waktu:3000},
    {nama: "B",hasil:false,waktu:1000},
    {nama: "C",hasil:false,waktu:2000},
    {nama: "D",hasil:true,waktu:4000}
]
function tambahTugas(tugas){
    return new Promise((resolve,reject) => {
        tugas.forEach((tugas2) => {
            setTimeout(() => {
                if(tugas2.hasil){
                    resolve(`Berhasil: ${tugas2.nama} Operasi Berhasil`)

                }else{
                    reject(`Gagal: ${tugas2.nama} Operasi Gagal`)

                }
            },tugas2.waktu)
            });
        });
}

tugas.forEach((tugas2) =>{
    tambahTugas([tugas2])
    .then((result)=> {
        console.log(result)
    })
    .catch((error)=> {
        console.log(error)
    })
})


// var server = http.createServer(async (req,res) => {
    //     res.writeHead(200,{
//         'Content-Type' : 'text/plain'
//     });
//         for(const tugas2 of tugas){
//             try{
//                 const akhir = await tambahTugas(tugas2);
//                 res.write(`${akhir}\n`)
//             } catch(error){
//                 res.write(`${error}\n`)
//             }
//         }
//     res.end();
// });


// const http = require('http');
// const server = http.createServer(async (req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });

//     for (const tugas2 of tugas) {
//         try {
//             const hasil = await tambahTugas(tugas2);
//             res.write(`${hasil}\n`);
//         } catch (error) {
//             res.write(`${error}\n`);
//         }
//     }

//     res.end();
// })
//     const port = 7000;
//     server.listen(port,() => {
//     console.log(`Server jalan di http://localhost:${port}`)
//     })
    