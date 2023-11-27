const express = require('express')
const usersiswa = require('./router/siswa')
const app = express()
const port = 3000
const connectDB = require('./config/db')

app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(usersiswa)

connectDB()
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})