import Image from 'components/image/Image';
import Loader from 'components/loader/Loader';
import Viewer from 'components/viewer/Viewer';
import { DocumentState } from 'modules/document/documentReducer';
import { UIArtboard } from 'modules/document/types';
import styles from './ArtboardList.module.scss';

type ArtboardListProps = {
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  data?: UIArtboard[];
  state: DocumentState;
  userOpensArtboard: (index: number) => void;
  userClosesArtboard: () => void;
  userClicksNextArtboard: () => void;
  userClicksPrevArtboard: () => void;
};

function ArtboardList(props: ArtboardListProps) {
  const {
    isError,
    isLoading,
    isSuccess,
    data = [],
    state,
    userOpensArtboard,
    userClosesArtboard,
    userClicksNextArtboard,
    userClicksPrevArtboard,
  } = props;

  if (isLoading)
    return (
      <div className={styles['loader-container']}>
        <Loader />
      </div>
    );
  if (isError)
    return (
      <div className={styles['error-container']}>
        <p>Error loading document data</p>
      </div>
    );

  return (
    <div className={styles['artboard-list']}>
      {isSuccess && (
        <>
          {data.map((artboard: UIArtboard, index: number) => (
            <div
              className={styles['artboard-item']}
              key={artboard.id}
              onClick={() => userOpensArtboard(index)}
            >
              <Image
                className={styles.image}
                src={artboard.thumb}
                alt={artboard.title}
              />
              <p>{artboard.title}</p>
            </div>
          ))}
          <Viewer
            isOpen={state.isViewerOpen}
            onClose={userClosesArtboard}
            onNextItem={userClicksNextArtboard}
            onPrevItem={userClicksPrevArtboard}
            currentIndex={state.currentArtboard}
            data={data}
          />
        </>
      )}
    </div>
  );
}

export default ArtboardList;
