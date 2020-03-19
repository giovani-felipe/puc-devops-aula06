const { CalculadoraService } = require('../service');

class CalculadoraController {

    sumNumber(req, res, next) {
        const { valor1, valor2 } = req.body;

        try {
            const sumNumber = new CalculadoraService();
            const response = sumNumber.sumNumber(valor1, valor2);

            return res.status(200).send({ data: response });
        } catch (e) {
            res.status(404).send({ message: e.message });
        }
    }

    subNumber(req, res, next) {
        const { valor1, valor2 } = req.body;

        try {
            const sumNumber = new CalculadoraService();
            const response = sumNumber.subNumber(valor1, valor2)

            return res.status(200).send({ data: response });
        } catch (e) {
            return res.status(404).send({ message: e.message });
        }
    }
}

module.exports = CalculadoraController;