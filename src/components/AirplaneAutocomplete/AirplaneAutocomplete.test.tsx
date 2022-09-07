import { render, screen } from '../../utils/tests';
import userEvent from '@testing-library/user-event';

import { AirplaneAutocomplete } from './AirplaneAutocomplete';

describe('<AirplaneAutocomplete />', () => {
  test('should filter on user input', () => {
    render(<AirplaneAutocomplete />);
    userEvent.type(screen.getByRole('combobox'), 'se');
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  test('empty message shows on no match', () => {
    render(<AirplaneAutocomplete />);
    userEvent.type(screen.getByRole('combobox'), 'aa');
    expect(screen.getByText('No options')).toBeInTheDocument();
  });
});
