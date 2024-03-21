const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

test('00:00 should return "midnight"', () => {
  expect(timeWord('00:00')).toBe('midnight');
});

test('00:12 should return "twelve twelve am"', () => {
  expect(timeWord('00:12')).toBe('twelve twelve am')
})

test('01:00 should return "one am"', () => {
  expect (timeWord('01:00')).toBe('one am')
})

test('06:10', () => {
  expect(timeWord('06:10')).toBe('six ten am');
});

test('06:18', () => {
  expect(timeWord('06:18')).toBe('six eighteen am');
});

test('06:30', () => {
  expect(timeWord('06:30')).toBe('six thirty am');
});

test('10:34', () => {
  expect(timeWord('10:34')).toBe('ten thirty four am');
});

test('12:00', () => {
  expect(timeWord('12:00')).toBe('noon');
});

test('12:09', () => {
  expect(timeWord('12:09')).toBe('twelve oh nine pm');
});

test('23:23', () => {
  expect(timeWord('23:23')).toBe('eleven twenty three pm');
});
