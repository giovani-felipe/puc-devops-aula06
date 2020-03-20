const { Router } = require('express');
const router = Router();

const { CalculadoraController } = require('../controller');
const calculadoraController = new CalculadoraController();

router.route('/calculadora/addition').post(calculadoraController.additionNumber);
router.route('/calculadora/subtraction').post(calculadoraController.subtractionNumber);
router.route('/calculadora/multiplication').post(calculadoraController.multiplicationNumber);
router.route('/calculadora/division').post(calculadoraController.divisionNumber);

module.exports = router;