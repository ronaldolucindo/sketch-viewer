import styles from './ViewerHeader.module.scss';
import { ReactComponent as PrevIcon } from 'assets/icons/arrow-left.svg';
import { ReactComponent as NextIcon } from 'assets/icons/arrow-right.svg';

type ViewerHeaderProps = {
  currentIndex: number;
  title: string;
  totalItems: number;
  onNextItem: () => void;
  onPrevItem: () => void;
};
function ViewerHeader(props: ViewerHeaderProps) {
  const { totalItems, currentIndex, title, onNextItem, onPrevItem } = props;
  return (
    <header className={styles['viewer-header']}>
      <div className={styles.navbar}>
        <button type="button" onClick={onPrevItem}>
          <PrevIcon />
        </button>
        <p>
          {currentIndex + 1} / {totalItems}
        </p>
        <button type="button" onClick={onNextItem}>
          <NextIcon />
        </button>
      </div>
      <h2>{title}</h2>
    </header>
  );
}

export default ViewerHeader;
