const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se param é undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Testa se param é string', () => {
    const invalido = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(1)).toBe(invalido);
    expect(handlerElephants([])).toBe(invalido);
    expect(handlerElephants({})).toBe(invalido);
  });
  it('Testa se count retorna um Number', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Testa se há o nome que possui Jefferson', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Testa se há averageAge é próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Testa se o location é NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Testa se no popularity retorna um número =+ 5', () => {
    expect(handlerElephants('popularity')).toBe(Math.min(5));
  });
  it('Testa se passando uma string incompleta retorna null', () => {
    expect(handlerElephants('incompleta')).toBe(null);
  });
  it('Testa se passando availability retorna um array de dias', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
