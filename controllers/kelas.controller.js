const { kelas: Kelas } = require('../models')

const create = async(req, res) => {
     try {
        const kelas = await Kelas.create(req.body);
        return res.status(200).json({
            status:true,
            message: 'kelas baru dibuat',
            kelas,
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
        const kelas = await Kelas.findAll()
        return res.status(200).json({
            status: true,
            message: 'mendapatkan semua kelas',
            kelas,
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
        const kelas = await Kelas.findByPk(id)
        if(!kelas) {
            return res.status(404).json({
                status: false,
                message: 'kelas tidak ditemukan'
            })
        }

        return res.status(200).json({
            status: true,
            message: 'mendapatkan satu kelas',
            kelas,
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
        const num = await Kelas.destroy({
            where: { id }
        })

        if (num === 0) {
            return res.status(404).json({
                status: false,
                meesage: 'Tidak ada kelas yang dihapus'
            })
        }

        return res.status(200).json({
            status: true,
            meesage: 'kelas berhasil dihapus'
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
    destroy
}