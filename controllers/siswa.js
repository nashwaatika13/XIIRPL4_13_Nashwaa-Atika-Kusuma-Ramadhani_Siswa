const Siswa = require('../models/siswa')

module.exports = {
    index: async(req, res) => {
        try {
            const siswa = await Siswa.find()
            if(siswa.length > 0){ 
                res.status(200).json({
                    status: true,
                    data: siswa,
                    method: req.method,
                    url: req.url,
                    message: "success"
                })
            }else{
                res.json({
                    status: false,
                    message: "Data Masih Kosong"
                })
            }
        } catch (error) {
            res.status(400).json({sucess: false})
        }
        
      },
      // tampilkan data id tertentu
      show: async (req, res) => { 
        try{
            const siswa = await Siswa.findById(req.params.id) 
            res.status(202).json({
                status: true,
                data: siswa,
                method: req.method,
                url: req.url,
                message: "data berhasil didapatkan"
            })
            
        } catch (error) {
            console.log(error)
            res.status(400).json({success: false})
        }
      },
      //  nampilkan data
      store: async (req, res) => { 
        try {
            console.log(req.body)
            const siswa = await Siswa.create(req.body) 
            res.status(201).json({
                status: true,
                data: siswa,
                method: req.method,
                url: req.url,
                message: "Data Berhasil Ditambah"
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({success: false})
        }
      },
      update: async (req, res) => { 
        try{
            const siswa = await Siswa.findByIdAndUpdate(req.params.id, req.body, {
                new : true,
                runValidators : true
            }) 
            res.status(202).json({
                status: true,
                data: siswa,
                method: req.method,
                url: req.url,
                message: "Data Berhasil Diubah"
            })
            
        } catch (error) {
            console.log(error)
            res.status(400).json({success: false})
        }
      },
      delete: async (req, res) => { 
        try {
            await Siswa.findByIdAndDelete(req.params.id)
            res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: "Data Berhasil Dihapus"
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({success: false})
        }
      }
}