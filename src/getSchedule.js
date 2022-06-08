const { hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { species } = data;
const dias = Object.keys(hours);
const horas = Object.values(hours);
const [dia1, dia2, dia3, dia4, dia5, dia6] = dias;
const zooInfo = { [dia1]: { officeHour: `Open from ${horas[0].open}am until ${horas[0].close}pm`,
  exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'] },
[dia2]: { officeHour: `Open from ${horas[1].open}am until ${horas[1].close}pm`,
  exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'] },
[dia3]: { officeHour: `Open from ${horas[2].open}am until ${horas[2].close}pm`,
  exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'] },
[dia4]: { officeHour: `Open from ${horas[3].open}am until ${horas[3].close}pm`,
  exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'] },
[dia5]: { officeHour: `Open from ${horas[4].open}am until ${horas[4].close}pm`,
  exhibition: ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants'],
},
[dia6]: { officeHour: `Open from ${horas[5].open}am until ${horas[5].close}pm`,
  exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'] },
Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
function getSchedule(scheduleTarget) { // seu código aqui
  const animais = species.map((specieFiltrada) => (specieFiltrada.name));
  const animaisDias = [...dias, ...animais];
  const testeString = animaisDias.some((teste) => teste === scheduleTarget);
  const aviso = { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  if (scheduleTarget === 'Monday') { return aviso; }
  if (testeString === false) { return zooInfo; }
  const animal = species.find((specieFiltrada) => (specieFiltrada.name === scheduleTarget));
  if (dias.includes(scheduleTarget)) { return { [scheduleTarget]: zooInfo[scheduleTarget] }; }
  if (scheduleTarget === animal.name) { return animal.availability; } return zooInfo;
}

module.exports = getSchedule;
