const { Router } = require('express');
const router = Router();

const { CalculadoraController } = require('../controller');
const calculadoraController = new CalculadoraController();

router.route('/calculadora/sum').post(calculadoraController.sumNumber);
router.route('/calculadora/sub').post(calculadoraController.subNumber);

module.exports = router;