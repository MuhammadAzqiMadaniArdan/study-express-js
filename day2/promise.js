
var tugas = true

function runningTask(nameTask,success,time ){

    return new Promise((resolve,reject) => {
        // code
        setTimeout(() => {
            if(success){
                resolve(` Tugas ${nameTask} Selesai`)
            }else{
                reject(` Tugas ${nameTask} Belum Selesai`)
            }
        },time * 1000)
        });
}

runningTask('A',true,2)
    .then((result)=> {
        console.log(result)
    })
    .catch((error)=> {
        console.log(error)
    })

runningTask('B',false,1)
    .then((result)=> {
        console.log(result)
    })
    .catch((error)=> {
        console.log(error)
    })

runningTask('C',true,0.5)
    .then((result)=> {
        console.log(result)
    })
    .catch((error)=> {
        console.log(error)
    })