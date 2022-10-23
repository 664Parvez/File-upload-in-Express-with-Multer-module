const express = require('express')
const app = express()
const multer = require('multer')


app.set('view engine', 'ejs')


// Multer Code Start

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
        filename: function (req, file, cb) {
        const name = Date.now() + "-" + file.originalname
            cb(null, name)
        }
    })

    const upload = multer({ storage: storage })

// Multer Code End

app.get('/', (req, res) => {
    res.status(200).render('index')
})

app.post('/', upload.single('imageFile'), (req, res) => {
    res.status(300).send('File is Uploaded')
})



app.use((req, res) => {
    res.status(404).send('Page is not Found')
})

module.exports = app