const router = require('express').Router()
const partnerCtrl = require('../controllers/partnerCtrl')

router.route('/partner')
    .get(partnerCtrl.getPartner)
    .post(partnerCtrl.createPartner)

router.route('/partner/:id')
    .delete(partnerCtrl.deletePartner)

module.exports = router