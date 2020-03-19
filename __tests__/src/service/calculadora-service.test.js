const CalculadoraService = require('../../../src/service/calculadora-service');

test('sum two number', () => {
    let calculadora = new CalculadoraService();

    let valor1 = 1;
    let valor2 = 2;

    let result = 3;

    expect(calculadora.sum(valor1, valor2)).toBe(result);
})