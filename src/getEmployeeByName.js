const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (typeof employeeName === 'undefined') {
    return {};
  }
  const emName = employeeName;
  const dados = data.employees;
  const colab = dados.find((names) => (names.firstName === emName || names.lastName === emName));
  return colab;
}

module.exports = getEmployeeByName;
