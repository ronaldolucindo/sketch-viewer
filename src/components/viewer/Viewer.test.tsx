import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Viewer from './Viewer';

const viewerProps = {
  data: [
    { title: 'title', url: 'url', id: '1' },
    { title: 'title2', url: 'url2', id: '2' },
  ],
  isOpen: true,
  currentIndex: 0,
  onClose: jest.fn(),
  onNextItem: jest.fn(),
  onPrevItem: jest.fn(),
};

test('renders item title', () => {
  render(<Viewer {...viewerProps} />);

  expect(screen.getByTestId('Viewer.title').textContent).toBe(
    viewerProps.data[0].title
  );
});

test('disables prev button when first item', async () => {
  render(<Viewer {...viewerProps} />);

  const prevBtn = screen.getByTestId('Viewer.prevBtn');
  const nextBtn = screen.getByTestId('Viewer.nextBtn');

  expect(prevBtn).toBeDisabled();
  expect(nextBtn).not.toBeDisabled();
  await userEvent.click(prevBtn);
  expect(viewerProps.onPrevItem).not.toBeCalled();
});

test('disables next button when last item', async () => {
  render(<Viewer {...viewerProps} currentIndex={1} />);

  const nextBtn = screen.getByTestId('Viewer.nextBtn');
  const prevBtn = screen.getByTestId('Viewer.prevBtn');

  expect(nextBtn).toBeDisabled();
  expect(prevBtn).not.toBeDisabled();
  await userEvent.click(nextBtn);
  expect(viewerProps.onNextItem).not.toBeCalled();
});

test('calls onNextItem function', async () => {
  render(<Viewer {...viewerProps} />);

  const nextBtn = screen.getByTestId('Viewer.nextBtn');
  await userEvent.click(nextBtn);
  expect(viewerProps.onNextItem).toBeCalled();
});

test('calls onPrevItem function', async () => {
  render(<Viewer {...viewerProps} currentIndex={1} />);

  const prevBtn = screen.getByTestId('Viewer.prevBtn');
  await userEvent.click(prevBtn);
  expect(viewerProps.onPrevItem).toBeCalled();
});
