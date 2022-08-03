import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from './Modal';

const modalProps = {
  isOpen: true,
  header: <p>Modal title</p>,
  onClose: jest.fn(),
};

afterEach(() => {
  cleanup();
});

test('renders when isOpen', () => {
  render(<Modal {...modalProps}>Content</Modal>);

  expect(screen.getByTestId('Modal')).toBeInTheDocument();
  expect(screen.getByTestId('Modal.content').textContent).toBe('Content');
});

test('does not render when isOpen is false', () => {
  render(
    <Modal {...modalProps} isOpen={false}>
      Content
    </Modal>
  );

  expect(screen.queryByTestId('Modal')).not.toBeInTheDocument();
});

test('calls onClose function', async () => {
  render(<Modal {...modalProps}>Content</Modal>);

  const closeBtn = screen.getByTestId('Modal.closeBtn');
  await userEvent.click(closeBtn);
  expect(modalProps.onClose).toBeCalled();
});
