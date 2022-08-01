import styles from './ViewerHeader.module.scss';
import { ReactComponent as PrevIcon } from 'assets/icons/arrow-left.svg';
import { ReactComponent as NextIcon } from 'assets/icons/arrow-right.svg';
import { ReactComponent as SeparatorIcon } from 'assets/icons/separator.svg';
import { ReactComponent as BreadcrumbIcon } from 'assets/icons/breadcrumb.svg';

type ViewerHeaderProps = {
  currentIndex: number;
  title: string;
  totalItems: number;
  onNextItem: () => void;
  onPrevItem: () => void;
};
function ViewerHeader(props: ViewerHeaderProps) {
  const { totalItems, currentIndex, title, onNextItem, onPrevItem } = props;
  const isNextButtonDisabled = currentIndex + 1 === totalItems;
  const isPrevButtonDisabled = currentIndex === 0;
  return (
    <header className={styles['viewer-header']}>
      <SeparatorIcon className={styles.separator} />
      <div className={styles.navbar}>
        <button
          type="button"
          onClick={onPrevItem}
          disabled={isPrevButtonDisabled}
        >
          <PrevIcon />
        </button>
        <p>
          {currentIndex + 1} <BreadcrumbIcon /> {totalItems}
        </p>
        <button
          type="button"
          onClick={onNextItem}
          disabled={isNextButtonDisabled}
        >
          <NextIcon />
        </button>
      </div>
      <h2>{title}</h2>
    </header>
  );
}

export default ViewerHeader;
