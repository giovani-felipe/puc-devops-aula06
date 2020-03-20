const { CalculadoraService } = require('../service');

class CalculadoraController {

    additionNumber(req, res, next) {
        const { valor1, valor2 } = req.body;

        try {
            const additionNumber = new CalculadoraService();
            const response = additionNumber.additionNumber(valor1, valor2);

            return res.status(200).send({ data: response });
        } catch (e) {
            res.status(404).send({ message: e.message });
        }
    }

    subtractionNumber(req, res, next) {
        const { valor1, valor2 } = req.body;

        try {
            const subtractionNumber = new CalculadoraService();
            const response = subtractionNumber.subtractionNumber(valor1, valor2);

            return res.status(200).send({ data: response });
        } catch (e) {
            return res.status(404).send({ message: e.message });
        }
    }

    multiplicationNumber(req, res, next) {
        const { valor1, valor2 } = req.body;

        try {

            const multiplicationNumber = new CalculadoraService();
            const response = multiplicationNumber.multiplicationNumber(valor1, valor2);

            return res.status(200).send({ data: response });
        } catch (e) {
            return res.status(404).send({ message: e.message });
        }
    }

    divisionNumber(req, res, next) {
        const { valor1, valor2 } = req.body;

        try {

            if (valor1 < valor2) {
                return res.status(404).send({ message: 'Dividendo não pode ser menor do que o divisor!' });
            }

            const divisionNumber = new CalculadoraService();
            const response = divisionNumber.divisionNumber(valor1, valor2);

            return res.status(200).send({ data: response });
        } catch (e) {
            return res.status(404).send({ message: e.message });
        }
    }
}

module.exports = CalculadoraController;