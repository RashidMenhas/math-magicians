import operate from '../../logic/operate';

test('adds 2 + 2 to equal 4', () => {
  const add = parseInt(operate(2, 2, '+'), 10);
  const substruct = parseInt(operate(2, 2, '-'), 10);
  const divide = parseInt(operate(2, 2, '÷'), 10);
  const multiply = parseInt(operate(2, 2, 'x'), 10);
  expect(add).toBe(4);
  expect(substruct).toBe(0);
  expect(divide).toBe(1);
  expect(multiply).toBe(4);
});
