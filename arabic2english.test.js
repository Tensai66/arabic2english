const arabic2english = require('./arabic2english');

test('returns value of zero if given 0', () => {
  expect(arabic2english(0)).toBe('zero');
});

test('returns value of one if given 1', () => {
  expect(arabic2english(1)).toBe('one');
});

test('returns value of two if given 2', () => {
  expect(arabic2english(2)).toBe('two');
});

test('returns value of three if given 3', () => {
  expect(arabic2english(3)).toBe('three');
});

test('returns value of eleven given 11', () => {
  expect(arabic2english(11)).toBe('eleven');
});

test('returns value of seventeen given 17', () => {
  expect(arabic2english(17)).toBe('seventeen');
});

test('returns value of nineteen given 19', () => {
  expect(arabic2english(19)).toBe('nineteen');
});

test('returns value of twenty given 20', () => {
  expect(arabic2english(20)).toBe('twenty');
});

test('returns value of twenty given 25', () => {
  expect(arabic2english(25)).toBe('twenty five');
});

test('returns value of ninety nine given 99', () => {
  expect(arabic2english(99)).toBe('ninety nine');
});

test('returns value of one hundred given 100', () => {
  expect(arabic2english(100)).toBe('one hundred');
});

test('returns value of nine hundred ninety nine given 999', () => {
  expect(arabic2english(999)).toBe('nine hundred ninety nine');
});

test('returns value of one thousand given 1000', () => {
  expect(arabic2english(1000)).toBe('one thousand');
});

test('returns value of one thousand one given 1001', () => {
  expect(arabic2english(1001)).toBe('one thousand one');
});

test('returns value of one thousand nine hundred ninety nine given 1999', () => {
  expect(arabic2english(1999)).toBe('one thousand nine hundred ninety nine');
});