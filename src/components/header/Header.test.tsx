import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders correct title', () => {
  render(<Header title="Document" />);
  expect(screen.getByTestId('Header.title').textContent).toBe('Document');
});
