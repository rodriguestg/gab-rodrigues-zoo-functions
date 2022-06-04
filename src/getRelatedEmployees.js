const data = require('../data/zoo_data');

const { employees } = data;
function isManager(id) {
  // seu código aqui
  const usuario = employees.some((gerenteFiltrado) => gerenteFiltrado.managers.includes(id));
  return usuario;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === true) {
    const equipe = employees.filter((equipeId) => equipeId.managers.includes(managerId));
    const nomesEquipe = equipe.map((employ) => `${employ.firstName} ${employ.lastName}`);
    return nomesEquipe;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
