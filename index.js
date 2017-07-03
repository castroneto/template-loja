const express = require('express')
const app = express()
const multer = require('multer')

const upload = multer({ dest: '/uploads' }) // Configuramos o destino dos arquivos.

app.get('/', (req, res) => {
 res.sendFile('app/index.html' , { root : __dirname});
})

app.post('/upload', upload.single('avatar'), (req, res) => {

})

app.listen(3000, () => console.log('Listening on port 3000!'))
