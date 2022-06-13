const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const { species, employees } = data;
  const colaboradores = employees.filter((colaborador) => colaborador.id === id)
    .map((speciesResponsible) => speciesResponsible.responsibleFor)
    .find((specie) => specie[0]);
  const generalSpecies = species.filter((specieAtual) => specieAtual.id === colaboradores[0]);
  const [animals] = generalSpecies.map((animal) => animal.residents);
  const ageMax = animals
    .reduce((age, ageComparador) => (ageComparador.age >= age ? ageComparador.age : age), 0);
  const animalMax = animals.find((ani) => ani.age === ageMax);
  return Object.values(animalMax);
}

module.exports = getOldestFromFirstSpecies;
