import { render } from '@testing-library/react';
import Calculator from '../calculator';

it('test for Calculator compoenent', () => {
  const tree = render(<Calculator />);
  expect(tree).toMatchSnapshot();
});
