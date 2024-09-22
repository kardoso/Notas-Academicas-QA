function calcularResultado(nota1, nota2) {
  // Função para validar se as notas são números entre 0 e 10
  function validarNota(nota) {
    return typeof nota === 'number' && nota >= 0 && nota <= 10;
  }

  // Validação das notas de entrada
  if (!validarNota(nota1)) {
    return 'Erro: Nota1 inválida. Insira um número entre 0 e 10.';
  }
  if (!validarNota(nota2)) {
    return 'Erro: Nota2 inválida. Insira um número entre 0 e 10.';
  }

  // Cálculo do total de pontos
  const total = nota1 + nota2;

  // Verificação do total de pontos
  if (total < 12) {
    return 'Resultado: Reprovado.';
  }

  // Verificação das notas individuais
  if (nota1 < 6 || nota2 < 6) {
    return 'Resultado: Necessita de prova extra.';
  }

  // Se passou em todas as verificações anteriores, está aprovado
  return 'Resultado: Aprovado, não necessita de prova extra.';
}

// Exporta a função para uso em outros módulos
module.exports = calcularResultado;