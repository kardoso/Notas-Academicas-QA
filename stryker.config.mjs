// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  mutate: ['index.js'], // Arquivos que serão mutados
  testRunner: 'jest', // Runner de testes
  jest: {
    projectType: 'custom', // Tipo de projeto Jest
  },
  reporters: ['progress', 'clear-text', 'html'], // Tipos de relatórios
  coverageAnalysis: 'off', // Deve ser 'off' quando usar Jest
  // Em caso de integração contínua
  thresholds: {
    high: 80,
    low: 60,
    break: 50, // O build falhará se a taxa de mutação for menor que 50%
  },
  //// Exclui tipos específicos de mutação
  // mutator: {
  //   excludedMutations: ['BooleanSubstitution'],
  // }
};
export default config;
