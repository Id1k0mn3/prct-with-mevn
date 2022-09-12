const router = require('express-promise-router')()

const { menuItem, doctor} = require('../controller');

router.route('/:id').get(menuItem.get)
router.route('/').post(menuItem.create)
router.route('/').get(menuItem.getAll)
router.route('/:id').put(menuItem.update)
router.route('/:id').delete(menuItem.delete)

module.exports = router

