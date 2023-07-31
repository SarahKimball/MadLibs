// addCommas.test.js
const addCommas = require('./addCommas');

describe('#addCommas', () => {
  test('should format 1234 to "1,234"', () => {
    expect(addCommas(1234)).toBe('1,234');
  });

  test('should format 1000000 to "1,000,000"', () => {
    expect(addCommas(1000000)).toBe('1,000,000');
  });

  test('should format 9876543210 to "9,876,543,210"', () => {
    expect(addCommas(9876543210)).toBe('9,876,543,210');
  });

  test('should format 6 to "6"', () => {
    expect(addCommas(6)).toBe('6');
  });

  test('should format -10 to "-10"', () => {
    expect(addCommas(-10)).toBe('-10');
  });

  test('should format -5678 to "-5,678"', () => {
    expect(addCommas(-5678)).toBe('-5,678');
  });

  // Bonus test cases for decimal numbers
  test('should format 12345.678 to "12,345.678"', () => {
    expect(addCommas(12345.678)).toBe('12,345.678');
  });

  test('should format -3141592.65 to "-3,141,592.65"', () => {
    expect(addCommas(-3141592.65)).toBe('-3,141,592.65');
  });
});
