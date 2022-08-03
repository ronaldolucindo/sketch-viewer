import { useEffect } from 'react';
import ReactPortal from 'components/react-portal/ReactPortal';
import styles from './Modal.module.scss';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';

type ModalProps = {
  isOpen: boolean;
  children?: React.ReactNode;
  header?: React.ReactNode;
  onClose?: () => void;
};

function Modal({ isOpen, children, header, onClose }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return isOpen ? (
    <ReactPortal>
      <div className={styles.modal} aria-modal data-testid="Modal">
        <div className={styles.header}>
          <button
            className={styles['close-btn']}
            type="button"
            onClick={onClose}
            data-testid="Modal.closeBtn"
          >
            <CloseIcon />
          </button>
          {header}
        </div>
        <div className={styles.content} data-testid="Modal.content">
          {children}
        </div>
      </div>
    </ReactPortal>
  ) : null;
}

export default Modal;
