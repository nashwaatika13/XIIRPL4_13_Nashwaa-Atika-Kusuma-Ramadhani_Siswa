const mongoose = require('mongoose')

const siswaSchema = new mongoose.Schema({
    nis: {
        type: String, 
        required: [true, 'Silahkan masukan NIS'], 
        unique: true
    },
    nama: {
        type: String, 
        required: [true, 'Silahkan masukan nama'], 
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Silahkan masukan email'],
    },
    tgl_lahir: {
        type: String,
        required: [true, 'Silahkan masukan tanggal lahir'],
    },
    alamat: {
        type: String, 
        required: [true, 'Silahkan masukan alamat'], 
    }

})

module.exports = mongoose.model('siswa', siswaSchema)