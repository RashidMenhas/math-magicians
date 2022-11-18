import { render } from '@testing-library/react';
import Quote from '../quote';

it('test for Calculator compoenent', () => {
  const tree = render(<Quote />);
  expect(tree).toMatchSnapshot();
});
