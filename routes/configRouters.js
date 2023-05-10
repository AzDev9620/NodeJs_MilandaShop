const router = require('express').Router()
const configCtrl = require('../controllers/configCtrl')

router.route('./config')
    .get(configCtrl.getConfig)
    .post(configCtrl.createConfig)

router.route('./config/:id')
    .delete(configCtrl.deleteConfig)
    .put(configCtrl.updateConfig)


module.exports = router