import { render } from '@testing-library/react';
import Home from '../home';

it('test for Calculator compoenent', () => {
  const tree = render(<Home />);
  expect(tree).toMatchSnapshot();
});
