import { render } from '@testing-library/react';
import Calculator from '../calculator';

it('test for Calculator compoenent', () => {
  const tree = render(<Calculator />);
  expect(tree).toMatchSnapshot();
});

it('test calculator click event', () => {
  const { getByTestId } = render(<Calculator />);
  expect(getByTestId('result-area').textContent).toBe('0');
});
