const CalculadoraService = require('../../../src/service/calculadora-service');

describe('Teste calculadora service', () => {
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

    it('return 200 in method sum', () => {
        const valor1 = 10;
        const valor2 = 20;
        const result = 30;

        const calculadoraService = new CalculadoraService();
        calculadoraService.additionNumber(valor1, valor2);

        expect(calculadoraService.additionNumber(valor1, valor2)).toBe(result);
    });

    it('return 200 in method sub', () => {
        const valor1 = 50;
        const valor2 = 20;
        const result = 30;

        const calculadoraService = new CalculadoraService();
        calculadoraService.subtractionNumber(valor1, valor2);

        expect(calculadoraService.subtractionNumber(valor1, valor2)).toBe(result);
    });

    it('return 200 in method mult', () => {
        const valor1 = 10;
        const valor2 = 10;
        const result = 100;

        const calculadoraService = new CalculadoraService();
        calculadoraService.multiplicationNumber(valor1, valor2);

        expect(calculadoraService.multiplicationNumber(valor1, valor2)).toBe(result);
    });

    it('return 200 in method divisionNumber', () => {
        const valor1 = 100;
        const valor2 = 10;
        const result = 10;

        const calculadoraService = new CalculadoraService();
        calculadoraService.divisionNumber(valor1, valor2);

        expect(calculadoraService.divisionNumber(valor1, valor2)).toBe(result);
    });
});