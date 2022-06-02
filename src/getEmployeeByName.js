const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (typeof employeeName === 'undefined') {
    return {};
  }
  // const colaborador = data.employees.find((aName) => aName.firstName === employeeName);
  // return colaborador;
  const emName = employeeName;
  const dados = data.employees;
  const colab = dados.find((names) => (names.firstName === emName || names.lastName === emName));
  return colab;
}

module.exports = getEmployeeByName;
