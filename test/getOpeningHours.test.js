const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se a função sem argumento retorna o objeto correto', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Teste se segunda o Zoo está fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Teste se terça o Zoo está fechado', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Teste se quarta a noite o Zoo está fechado', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Teste se dia Thu lança uma excesão', () => {
    function testeThu() {
      getOpeningHours('Thu', '09:00-AM');
    }
    expect(testeThu).toThrow('The day must be valid. Example: Monday');
  });/*
  it('Testes se segunda o Zoo está fechado', () => {
    expect(getOpeningHours('Friday', '09:00-AM')).toBe('The zoo is closssed');
  });
  it('Testes se segunda o Zoo está fechado', () => {
    expect(getOpeningHours('Saturday', '09:00-AM')).toBe('The zosso is closed');
  });
  it('Testes se segunda o Zoo está fechado', () => {
    expect(getOpeningHours('Sunday', '09:00-AM')).toBe('The zoo issss closed');
  });  
  it('Testes se segunda o Zoo está fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is clssosed');
  });
  it('Testes se segunda o Zoo está fechado', () => {
    expect(getOpeningHours('Tuesday', '09:60-AM')).toBe('The minutes must be between 0 and 59');
  }); */
});
