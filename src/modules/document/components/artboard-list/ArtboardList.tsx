import Viewer from 'components/viewer/Viewer';
import { apiToViewerFromat } from 'modules/document/dataTransform';
import { DocumentState } from 'modules/document/documentReducer';
import { Artboard } from 'modules/document/types';
import styles from './ArtboardList.module.scss';

type ArtboardListProps = {
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  data: Artboard[];
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
    data,
    state,
    userOpensArtboard,
    userClosesArtboard,
    userClicksNextArtboard,
    userClicksPrevArtboard,
  } = props;
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading document data</p>;

  return (
    <div className={styles['artboard-list']}>
      {isSuccess && (
        <>
          {data.map((artboard: Artboard, index: number) => (
            <div
              className={styles['artboard-item']}
              key={artboard.identifier}
              onClick={() => userOpensArtboard(index)}
            >
              <img
                src={artboard.files[0].thumbnails[0].url}
                alt={artboard.name}
              />
              <p>{artboard.name}</p>
            </div>
          ))}
          <Viewer
            isOpen={state.isViewerOpen}
            onClose={userClosesArtboard}
            onNextItem={userClicksNextArtboard}
            onPrevItem={userClicksPrevArtboard}
            currentIndex={state.currentArtboard}
            data={apiToViewerFromat(data)}
          />
        </>
      )}
    </div>
  );
}

export default ArtboardList;
