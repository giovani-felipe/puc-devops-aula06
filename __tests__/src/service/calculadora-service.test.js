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
        calculadoraService.sumNumber(valor1, valor2);

        expect(calculadoraService.sumNumber(valor1, valor2)).toBe(result);
    });

    it('return 200 in method sub', () => {
        const valor1 = 50;
        const valor2 = 20;
        const result = 30;

        const calculadoraService = new CalculadoraService();
        calculadoraService.subNumber(valor1, valor2);

        expect(calculadoraService.subNumber(valor1, valor2)).toBe(result);
    });

    it('return 200 in method mult', () => {
        const valor1 = 10;
        const valor2 = 10;
        const result = 100;

        const calculadoraService = new CalculadoraService();
        calculadoraService.multNumber(valor1, valor2);

        expect(calculadoraService.multNumber(valor1, valor2)).toBe(result);
    });
});