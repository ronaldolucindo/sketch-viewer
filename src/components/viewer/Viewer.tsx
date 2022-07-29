import Modal from 'components/modal/Modal';
import ViewerHeader from './viewer-header/ViewerHeader';

type ViewerItem = {
  title: string;
  url: string;
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
      Content here
    </Modal>
  );
}

export default Viewer;
