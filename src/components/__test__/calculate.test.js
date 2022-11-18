import calculate from '../../logic/calculate';

const add = calculate({
  total: 6,
  next: 4,
  operation: '+',

}, '+');

const sub = calculate({
  total: 6,
  next: 4,
  operation: '-',

}, '-');

const mult = calculate({
  total: 6,
  next: 4,
  operation: 'x',

}, 'x');

const divi = calculate({
  total: 6,
  next: 4,
  operation: '÷',

}, '÷');

test('Test Calculate Function', () => {
  expect(add.total).toBe('10');
  expect(sub.total).toBe('2');
  expect(mult.total).toBe('24');
  expect(divi.total).toBe('1.5');
});
