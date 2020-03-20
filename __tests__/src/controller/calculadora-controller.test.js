const CalculadoraController = require('../../../src/controller/calculadora-controller');

describe('Teste calculadora controller', () => {
    let res;
    let sendSpy;

    beforeAll(() => {});

    beforeEach(() => {
        jest.clearAllMocks();

        sendSpy = {
            send: jest.fn()
        };

        res = {
            status: jest.fn().mockReturnValue(sendSpy)
        };
    });

    it('return 200 in method additionNumber', async() => {
        const valor1 = 10;
        const valor2 = 20;
        const result = 30;

        const req = {
            body: { valor1, valor2 }
        };

        const calculadoraService = {
            additionNumber: jest.fn().mockReturnValue(30)
        }

        const calculadoraController = new CalculadoraController();
        calculadoraController.additionNumber(req, res);

        expect(calculadoraService.additionNumber(valor1, valor2)).toBe(result);
        expect(res.status).toHaveBeenCalledWith(200);
    });

    it('return 200 in method subtractionNumber', async() => {
        const valor1 = 40;
        const valor2 = 10;
        const result = 30;

        const req = {
            body: { valor1, valor2 }
        };

        const calculadoraService = {
            subtractionNumber: jest.fn().mockReturnValue(30)
        }

        const calculadoraController = new CalculadoraController();
        calculadoraController.subtractionNumber(req, res);

        expect(calculadoraService.subtractionNumber(valor1, valor2)).toBe(result);
        expect(res.status).toHaveBeenCalledWith(200);
    });

    it('return 200 in method multiplicationNumber', async() => {
        const valor1 = 10;
        const valor2 = 10;
        const result = 100;

        const req = {
            body: { valor1, valor2 }
        };

        const calculadoraService = {
            multiplicationNumber: jest.fn().mockReturnValue(100)
        }

        const calculadoraController = new CalculadoraController();
        calculadoraController.multiplicationNumber(req, res);

        expect(calculadoraService.multiplicationNumber(valor1, valor2)).toBe(result);
        expect(res.status).toHaveBeenCalledWith(200);
    });

    it('return 200 in method divisionNumber', async() => {
        const valor1 = 100;
        const valor2 = 10;
        const result = 10;

        const req = {
            body: { valor1, valor2 }
        };

        const calculadoraService = {
            divisionNumber: jest.fn().mockReturnValue(10)
        }

        const calculadoraController = new CalculadoraController();
        calculadoraController.divisionNumber(req, res);

        expect(calculadoraService.divisionNumber(valor1, valor2)).toBe(result);
        expect(res.status).toHaveBeenCalledWith(200);
    });
});