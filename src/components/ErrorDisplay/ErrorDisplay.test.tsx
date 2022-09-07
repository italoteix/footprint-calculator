import { render, screen } from '../../utils/tests';

import { ErrorDisplay } from './ErrorDisplay';

describe('<ErrorDisplay />', () => {
  test('should render title and message', () => {
    render(<ErrorDisplay title='Lorem ipsum' message='dolor sit amet' />);
    expect(screen.getByRole('heading', { name: /lorem ipsum/i })).toBeInTheDocument();
    expect(screen.getByText(/dolor sit amet/i)).toBeInTheDocument();
  });
});
