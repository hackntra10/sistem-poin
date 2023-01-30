const { siswa: Siswa, pelanggaran } = require('../models');

const create = async(req, res) => {
    try {
       const siswa = await Siswa.create(req.body);
       return res.status(200).json({
           status:true,
           message: 'siswa baru dibuat',
           siswa,
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
        const siswa = await Siswa.findAll({
            include:['kelas', 'pelanggarans']
        })
        return res.status(200).json({
            status: true,
            message: 'mendapatkan semua siswa',
            siswa,
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
        const siswa = await Siswa.findByPk(id, {
            include: ['kelas', 'pelanggarans']
        })
        if(!siswa) {
            return res.status(404).json({
                status: false,
                message: 'siswa tidak ditemukan'
            })
        }

        return res.status(200).json({
            status: true,
            message: 'mendapatkan satu siswa',
            siswa,
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            error,
        })
    }
}

const addPelanggaran = async (req, res) => {
    const { id } = req.params 
    const { id_pelanggaran } = req.body 

    try {
        const siswa = await Siswa.findByPk(id)
        const pelanggaran = await Pelanggaran.findByPk(id_pelanggaran)
   
        if(!siswa) {
            return res.status(404).json({
                status: false,
                message: 'siswa tidak ditemukan'
            })
        }

        if (!pelanggaran) {
            return res.status(404).json({
                status: false, 
                message: 'pelanggaran tidak ditemukan'
            })
        }

        siswa.addPelanggaran(pelanggaran)
        return res.status(200).json({
            status: true, 
            message: 'pelanggaran telah ditambahkan ke siswa'
        })
    } catch(error) {
        return res.status(500).json({
            status: false,
            error,
        })
    }
}

const destroy = async (req, res)=> {
    const { id } = req.params 

    try {
        const num = await Siswa.destroy({
            where: { id }
        })

        if (num === 0) {
            return res.status(404).json({
                status: false,
                meesage: 'Tidak ada siswa yang dihapus'
            })
        }

        return res.status(200).json({
            status: true,
            meesage: 'siswa berhasil dihapus'
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
    destroy,
    addPelanggaran
}
