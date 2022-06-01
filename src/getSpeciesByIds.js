const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) {
    return [];
  }
  if (ids.length === 1) {
    return [species.find((specie) => specie.id === ids[0])];
  }
  return ids.map((specie) => species.find((specieId) => specieId.id === specie));
}

module.exports = getSpeciesByIds;
