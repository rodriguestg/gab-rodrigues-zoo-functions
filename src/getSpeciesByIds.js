const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui

  const { id, name } = data;
  return name;
}

console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
