const express = require('express')
const router = express.Router()

const siswacontroller = require('../controllers/siswa')

router.get('/Siswa', siswacontroller.index)

router.get('/Siswa/:id', siswacontroller.show)

router.post('/Siswa', siswacontroller.store)

router.put('/Siswa/:id', siswacontroller.update)

router.delete('/Siswa/:id', siswacontroller.delete)

module.exports = router