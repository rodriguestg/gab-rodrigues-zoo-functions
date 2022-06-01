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
  it('Teste se dia Thu lança uma exceção de erro', () => {
    function testeThu() {
      getOpeningHours('Thu', '09:00-AM');
    }
    expect(testeThu).toThrow('The day must be valid. Example: Monday');
  });
  it('Teste se dia Friday/ZM lança uma exceção de erro', () => {
    function testeZm() {
      getOpeningHours('Friday', '09:00-ZM');
    }
    expect(testeZm).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Teste se dia Saturday/C9 lança uma exceção de erro', () => {
    function testeC9() {
      getOpeningHours('Saturday', 'C9:00-AM');
    }
    expect(testeC9).toThrow('The hour should represent a number');
  });
  it('Teste se dia Sunday/C0 lança uma exceção de erro', () => {
    function testeC9() {
      getOpeningHours('Sunday', '09:c0-AM');
    }
    expect(testeC9).toThrow('The minutes should represent a number');
  });
  it('Teste se dia Monday/13 lança uma exceção de erro', () => {
    function testeC9() {
      getOpeningHours('Monday', '13:00-AM');
    }
    expect(testeC9).toThrow('The hour must be between 0 and 12');
  });
  it('Teste se dia Tuesday/60 lança uma exceção de erro', () => {
    function testeC9() {
      getOpeningHours('Tuesday', '09:60-AM');
    }
    expect(testeC9).toThrow('The minutes must be between 0 and 59');
  });
});
