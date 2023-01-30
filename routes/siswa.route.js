const router = require('express').Router();
const { 
    create,
    findAll,
    findByPk,
    destroy,
    addPelanggaran
} = require('../controllers/siswa.controller')

router.post('/store', create);

router.get('/', findAll);

router.get('/:id', findByPk)

router.delete('/:id', destroy)

router.post('/report/:id', addPelanggaran);

module.exports = router;