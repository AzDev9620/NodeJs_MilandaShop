const router = require('express').Router()
const categoryCtrl = require('../controllers/catigoryCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.route('/category')
    .get(categoryCtrl.getCategories)
    .post(auth, authAdmin, categoryCtrl.createCategory)

router.route('/category/:id')
    .delete(auth, authAdmin, categoryCtrl.deleteCatigory)
    .put(auth, authAdmin, categoryCtrl.updateCatigory)

module.exports = router