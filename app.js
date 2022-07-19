const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hola mundooo')
})

app.post('/imagen', upload.single('imagen'),(req, res) => {
    const body = req.body
    const imagen = req.file
    console.log(imagen)
    res.send('Hello from POST')  
})

app.listen(port, () => {
  console.log(`Iniciando app en el puerto ${port}`)
})