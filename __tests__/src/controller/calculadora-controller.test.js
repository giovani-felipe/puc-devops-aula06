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

    it('return 200 in method sum', async() => {
        const valor1 = 10;
        const valor2 = 20;
        const result = 30;

        const req = {
            body: { valor1, valor2 }
        };

        const calculadoraService = {
            sumNumber: jest.fn().mockReturnValue(30)
        }

        const calculadoraController = new CalculadoraController();
        calculadoraController.sumNumber(req, res);

        expect(calculadoraService.sumNumber(valor1, valor2)).toBe(result);
        expect(res.status).toHaveBeenCalledWith(200);
    });

    it('return 200 in method sub', async() => {
        const valor1 = 40;
        const valor2 = 10;
        const result = 30;

        const req = {
            body: { valor1, valor2 }
        };

        const calculadoraService = {
            subNumber: jest.fn().mockReturnValue(30)
        }

        const calculadoraController = new CalculadoraController();
        calculadoraController.subNumber(req, res);

        expect(calculadoraService.subNumber(valor1, valor2)).toBe(result);
        expect(res.status).toHaveBeenCalledWith(200);
    });

    it('return 200 in method mult', async() => {
        const valor1 = 10;
        const valor2 = 10;
        const result = 100;

        const req = {
            body: { valor1, valor2 }
        };

        const calculadoraService = {
            multNumber: jest.fn().mockReturnValue(100)
        }

        const calculadoraController = new CalculadoraController();
        calculadoraController.multNumber(req, res);

        expect(calculadoraService.multNumber(valor1, valor2)).toBe(result);
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