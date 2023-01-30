const router = require('express').Router();
const { 
    create,
    findAll,
    findByPk,
    destroy,
    update
} = require('../controllers/pelanggaran.controller')

router.post('/store', create);

router.get('/', findAll);

router.get('/:id', findByPk)

router.delete('/:id', destroy)

router.put('/:id', update)

module.exports = router;