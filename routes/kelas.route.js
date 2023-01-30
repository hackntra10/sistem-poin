const router = require('express').Router();
const { 
    create,
    findAll,
    findByPk,
    destroy,
} = require('../controllers/kelas.controller')

router.post('/store', create);

router.get('/', findAll);

router.get('/:id', findByPk)

router.delete('/:id', destroy)


module.exports = router;