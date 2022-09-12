const router = require('express-promise-router')()

const { doctor } = require('../controller')

router.route('/:id').get(doctor.get)
router.route('/').post(doctor.create)
router.route('/').get(doctor.getAll)
router.route('/:id').put(doctor.update)
router.route('/:id').delete(doctor.delete)

module.exports = router