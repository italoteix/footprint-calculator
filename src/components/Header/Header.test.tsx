import { render, screen } from '../../utils/tests';

import { Header } from './Header';

describe('<Header />', () => {
  test('should render logo', () => {
    render(<Header />);
    expect(screen.getByRole('img', { name: /south pole/i })).toBeInTheDocument();
  });
});
