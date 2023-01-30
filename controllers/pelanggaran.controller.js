const { pelanggaran: Pelanggaran } = require('../models');

const create = async(req, res) => {
    try {
       const pelanggaran = await Pelanggaran.create(req.body);
       return res.status(200).json({
           status:true,
           message: 'siswa baru dibuat',
           pelanggaran,
       })
    } catch(error) {
       return res.status(500).json({
           status: false,
           error,
       })
    }
}

const findAll = async (req, res) => {
    try {
        const pelanggaran = await Siswa.findAll({
            include:'kelas'
        })
        return res.status(200).json({
            status: true,
            message: 'mendapatkan semua pelanggaran',
            pelanggaran,
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            error,
        })
    }
}

const findByPk = async(req, res) => {
    const { id } = req.params
    
    try {
        const pelanggaran = await Pelanggaran.findByPk(id, {
            include: 'kelas'
        })
        if(!siswa) {
            return res.status(404).json({
                status: false,
                message: 'pelanggaran tidak ditemukan'
            })
        }

        return res.status(200).json({
            status: true,
            message: 'mendapatkan satu pelanggaran',
            siswa,
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            error,
        })
    }
}

const update = async (req, res) => {
    const { id } = req.params 
    try {
        const num = Pelanggaran.update(req.body, {
            where: { id }
        })

        if (num === 0) {
            return res.status(404).json({
                status: false,
                message: 'tidak ada pelanggaran yang dibuah'
            })
        }

        return res.status(404).json({
            status: true,
            message: 'pelanggaran berhasil diubah'
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            error,
        })
    }
}

const destroy = async (req, res)=> {
    const { id } = req.params 

    try {
        const num = await Pelanggaran.destroy({
            where: { id }
        })

        if (num === 0) {
            return res.status(404).json({
                status: false,
                meesage: 'Tidak ada pelanggaran yang dihapus'
            })
        }

        return res.status(200).json({
            status: true,
            message: 'pelanggaran berhasil dihapus'
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            error
        })
    }
}

module.exports = {
    create,
    findAll,
    findByPk,
    update,
    destroy,
}
