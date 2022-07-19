const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hola mundooo')
})

app.listen(port, () => {
  console.log(`Iniciando app en el puerto ${port}`)
})