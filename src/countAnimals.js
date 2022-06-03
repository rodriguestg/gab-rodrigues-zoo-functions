const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const { species } = data;
  if (typeof animal === 'undefined') {
    const animalsLenght = () => species.reduce((animals, objectSpecie) => ({
      [objectSpecie.name]: objectSpecie.residents.length,
      ...animals,
    }), {});
    return animalsLenght();
  }
  const { specie, sex } = animal;
  const animalFiltrado = species.find((specieFiltrada) => (specieFiltrada.name === specie));
  if (typeof sex !== 'undefined') {
    const sexFiltrado = animalFiltrado.residents.map((resi) => resi.sex);
    const resultado = sexFiltrado.filter((specieFinal) => (specieFinal === sex));
    return resultado.length;
  }
  return animalFiltrado.residents.length;
}

module.exports = countAnimals;
