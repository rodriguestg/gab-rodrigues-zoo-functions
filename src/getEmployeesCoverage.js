const data = require('../data/zoo_data');

const { species, employees } = data;
function searchAnimals(idAnimal) {
  const animals = species.find((specie) => specie.id === idAnimal);
  return [animals.name, animals.location];
}
function fomartAnimals(obj) {
  if (Object.keys(obj).length === 5) {
    return {
      id: `${obj.id}`,
      fullName: `${obj.firstName} ${obj.lastName}`,
      species: obj.responsibleFor.map((specie1em1) => searchAnimals(specie1em1)[0]),
      locations: obj.responsibleFor.map((local1em1) => searchAnimals(local1em1)[1]),
    };
  }
}
function getEmployeesCoverage(employ) {
  // seu código aqui
  if (typeof employ === 'undefined') { return employees.map((obj1em1) => fomartAnimals(obj1em1)); }
  if (employ.id === 'Id inválido') { throw new Error('Informações inválidas'); }
  if (typeof employ.id !== 'undefined') {
    const colabId = employees.find((col) => col.id === employ.id);
    return fomartAnimals(colabId);
  }
  if (typeof employ.name !== 'undefined') {
    const { name } = employ;
    const colabName = employees.find((col) => col.firstName === name || col.lastName === name);
    return fomartAnimals(colabName);
  }
}

module.exports = getEmployeesCoverage;
