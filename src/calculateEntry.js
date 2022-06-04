const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const quantChild = entrants.filter((entran) => entran.age < 18);
  const quantAdult = entrants.filter((entran) => entran.age >= 18 && entran.age < 50);
  const quantSenior = entrants.filter((entran) => entran.age >= 50);
  // console.log(quantAdult.length);
  return { adult: quantAdult.length, child: quantChild.length, senior: quantSenior.length };
}

function calculateEntry(entrants) {
  // seu código aqui ok
  if (typeof entrants === 'undefined' || Object.entries(entrants).length === 0) { return 0; }
  let totalGeral = 0;
  const totalAdult = entrants.map(() => countEntrants(entrants).adult).find((tAdu) => `${tAdu}`);
  const totalEntrantsAdult = totalAdult * 49.99;
  totalGeral += totalEntrantsAdult;
  const totalChild = entrants.map(() => countEntrants(entrants).child).find((tChi) => `${tChi}`);
  const totalEntrantsChild = totalChild * 20.99;
  totalGeral += totalEntrantsChild;
  const totalSenior = entrants.map(() => countEntrants(entrants).senior).find((tSen) => `${tSen}`);
  const totalEntrantsSenior = totalSenior * 24.99;
  totalGeral += totalEntrantsSenior;
  return totalGeral;
}

module.exports = { calculateEntry, countEntrants };
