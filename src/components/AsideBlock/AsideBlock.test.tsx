import { render, screen } from '../../utils/tests';

import { AsideBlock } from './AsideBlock';

describe('<AsideBlock />', () => {
  test('should render title and message', () => {
    render(<AsideBlock title='Lorem ipsum' message='dolor sit amet' />);
    expect(screen.getByRole('heading', { name: /lorem ipsum/i })).toBeInTheDocument();
    expect(screen.getByText(/dolor sit amet/i)).toBeInTheDocument();
  });
});
