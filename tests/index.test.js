// tests/index.test.js
const calcularResultado = require('../index');

describe('Teste do cálculo de resultados acadêmicos', () => {
  test('Caso de teste 1: Aprovado sem necessidade de prova extra', () => {
    expect(calcularResultado(8, 7)).toBe('Resultado: Aprovado, não necessita de prova extra.');
  });

  test('Caso de teste 2: Necessita de prova extra por ter nota abaixo de 6', () => {
    expect(calcularResultado(5, 7)).toBe('Resultado: Necessita de prova extra.');
  });

  test('Caso de teste 3: Reprovado por não atingir 12 pontos', () => {
    expect(calcularResultado(4, 7)).toBe('Resultado: Reprovado.');
  });

  test('Caso de teste 4: Erro na entrada da Nota1 (valor negativo)', () => {
    expect(calcularResultado(-1, 5)).toBe('Erro: Nota1 inválida. Insira um número entre 0 e 10.');
  });

  test('Caso de teste 5: Erro na entrada da Nota2 (valor acima de 10)', () => {
    expect(calcularResultado(6, 11)).toBe('Erro: Nota2 inválida. Insira um número entre 0 e 10.');
  });

  test('Caso de teste 6: Notas exatamente iguais a 6 (aprovado)', () => {
    expect(calcularResultado(6, 6)).toBe('Resultado: Aprovado, não necessita de prova extra.');
  });

  test('Caso de teste 7: Notas decimais (necessita de prova extra)', () => {
    expect(calcularResultado(5.9, 6.1)).toBe('Resultado: Necessita de prova extra.');
  });

  test('Caso de teste 8: Notas iguais a zero (reprovado)', () => {
    expect(calcularResultado(0, 0)).toBe('Resultado: Reprovado.');
  });

  test('Caso de teste 9: Notas não numéricas (Nota1)', () => {
    expect(calcularResultado('A', 6)).toBe('Erro: Nota1 inválida. Insira um número entre 0 e 10.');
  });

  test('Caso de teste 10: Notas não numéricas (Nota2)', () => {
    expect(calcularResultado(6, 'B')).toBe('Erro: Nota2 inválida. Insira um número entre 0 e 10.');
  });

  test('Caso de teste 11: Erro na entrada da Nota1 (valor não numérico)', () => {
    expect(calcularResultado('A', 7)).toBe('Erro: Nota1 inválida. Insira um número entre 0 e 10.');
  });
  
  test('Caso de teste 12: Erro na entrada da Nota2 (valor nulo)', () => {
    expect(calcularResultado(6, null)).toBe('Erro: Nota2 inválida. Insira um número entre 0 e 10.');
  });
  
  test('Caso de teste 13: Erro na entrada da Nota1 (undefined)', () => {
    expect(calcularResultado(undefined, 5)).toBe('Erro: Nota1 inválida. Insira um número entre 0 e 10.');
  }); 

  test('Caso de teste 14: Notas exatamente iguais a 10 (aprovado)', () => {
    expect(calcularResultado(10, 10)).toBe('Resultado: Aprovado, não necessita de prova extra.');
  });
  
  test('Caso de teste 15: Nota1 igual a 10 e Nota2 válida (aprovado)', () => {
    expect(calcularResultado(10, 7)).toBe('Resultado: Aprovado, não necessita de prova extra.');
  });

	test('Caso de teste 16: Nota1 >= 6 e Nota2 < 6 (necessita de prova extra)', () => {
		expect(calcularResultado(7, 5)).toBe('Resultado: Necessita de prova extra.');
	});
	
	test('Caso de teste 17: Nota1 = 6 e Nota2 = 5.9 (necessita de prova extra)', () => {
		expect(calcularResultado(6, 5.9)).toBe('Resultado: Reprovado.');
	});
});
