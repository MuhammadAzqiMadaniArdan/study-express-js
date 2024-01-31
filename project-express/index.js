// var route
const express = require('express')
const bookRouter = require('./routes/book-route')
const authorRouter = require('./routes/author-route')
const authRouter = require('./routes/auth-router')
const jwt = require('jsonwebtoken')
const accessTokenSecret = '2023-WikramA-exp'
const cors = require('cors')

// menjalankan framework express
const app = express()
// memberitau kalau project express ini ketika mengirim data ,hanya bisa menggunakan format JSON
app.use(express.json())
// mengubah req dari url get ke bentuk json karena express disini hanya menerima tipe penulisan json
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(cors())

const authenticateJWT = (req,res,next) => {
    const authHeader = req.headers.authorization
    
    if(!authHeader){
        return res.status(403).json({message:'Unauthorized'})
    }

    const token = authHeader.split(' ')[1]

    jwt.verify(token,accessTokenSecret,(err,user) =>{
        if(err){
            return res.status(403).json({message:'Unauthorized'})
        }

        next()
    })
}

const PORT = 3000

app.use('/auth',authRouter)
// app.use('/book',authenticateJWT,bookRouter)
app.use('/book',bookRouter)
app.use('/author',authorRouter)
app.get('/book/:id/:bookname/:year',(req,res) => {
    res.send(req.params)
})

app.get('filter',(req,res) => {
    res.send(req.query)
})

// http://localhost:3000?id=1&bookname=Sangkuriang
// app.get('/',(req,res) => res.send('Hello World'))
// app.get('/wikrama',(req,res) => res.send('Hello Wikrama'))
// app.get('/about',(req,res) => res.send('Halo ini halaman about'))

app.listen(PORT,() =>
console.log(`Server ini berjalan di http://localhost:${PORT}`)
)

