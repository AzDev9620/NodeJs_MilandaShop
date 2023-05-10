const router = require('express').Router()
const orderedCtrl = require('../controllers/orderedCtrl')

router.route('/orderRegister')
    .get(orderedCtrl.getOrdered)
    .post(orderedCtrl.registerOrdered)

router.route('/orderRegister/:id')
    .delete(orderedCtrl.deleteOrdered)


module.exports = router