const http = require('http');
const {newFunction, testFunction} = require('./function');

// Promise ('Janji')
const printAgakTelat = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("sudah Sampai!")
            // reject("Kena tilang")
        },1000 * 5);
        
    });
}

var server = http.createServer(async (req,res) => {
    // res.write('Saya node,js');
    // res.end();
    // req.url //about
    switch (req.url) {
        case '/about':
            console.log('Saya Otw')
            const value = await
            printAgakTelat().then((value) =>
            { console.log(value);
            console.log('Ngopi');
    })
    // .catch((error) => console.log(error))
            res.write('ini about');
            res.end();
            break;
        case '/contact':
            res.write('ini contact');
            res.end();
            break;
        default:
            res.write('404 not found');
            res.end();
            break;
    }
    // if(req.url == '/about'){
    //     res.write('ini about');
    //     res.end();
    // }
    // else{
    //     res.write('404 not found');
    //     res.end();
    // }
});

const port = 3000;
server.listen(port,() => {
    console.log(`Server jalan di http://localhost:${port}`)

});