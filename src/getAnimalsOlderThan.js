const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalFilter = data.species.find((aName) => aName.name === animal);
  const dadosAnimais = animalFilter.residents;
  const idadeAnimal = dadosAnimais.map((animalIda) => animalIda.age);
  const idadeCorreta = idadeAnimal.filter((correto) => (correto < age));
  if (idadeCorreta.length === 0) {
    return true;
  }
  return false;
}

module.exports = getAnimalsOlderThan;
