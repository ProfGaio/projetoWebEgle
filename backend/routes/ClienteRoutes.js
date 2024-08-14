const router = require('express').Router()

const ClienteController = 
require('../controllers/ClienteController')

router.post('/registrar',ClienteController.registrar)

module.exports = router