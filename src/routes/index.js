const { Router } = require('express');
const router = Router();

const { CalculadoraController } = require('../controller');
const calculadoraController = new CalculadoraController();

router.route('/calculadora').get(calculadoraController.teste);
// router.route('/calculadora');

module.exports = router;
