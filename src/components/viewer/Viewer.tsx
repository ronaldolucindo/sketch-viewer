import Modal from 'components/modal/Modal';
import ViewerHeader from './viewer-header/ViewerHeader';
import styles from './Viewer.module.scss';

type ViewerItem = {
  title: string;
  url?: string;
  id: string;
};

type ViewerProps = {
  data: ViewerItem[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onNextItem: () => void;
  onPrevItem: () => void;
};

function Viewer(props: ViewerProps) {
  const { isOpen, currentIndex, data, onClose, onNextItem, onPrevItem } = props;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      header={
        <ViewerHeader
          currentIndex={currentIndex}
          title={data[currentIndex].title}
          onNextItem={onNextItem}
          onPrevItem={onPrevItem}
          totalItems={data.length}
        />
      }
    >
      <img
        className={styles['viewer-img']}
        src={data[currentIndex].url}
        alt={data[currentIndex].title}
      />
    </Modal>
  );
}

export default Viewer;
