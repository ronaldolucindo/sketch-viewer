import { Artboard } from 'modules/document/types';
import styles from './ArtboardList.module.scss';

type ArtboardListProps = {
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  data: Artboard[];
};

function ArtboardList(props: ArtboardListProps) {
  const { isError, isLoading, isSuccess, data } = props;
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading document data</p>;

  return (
    <div className={styles['artboard-list']}>
      {isSuccess &&
        data.map((artboard: Artboard) => (
          <div className={styles['artboard-item']} key={artboard.identifier}>
            <img
              src={artboard.files[0].thumbnails[0].url}
              alt={artboard.name}
            />
            <p>{artboard.name}</p>
          </div>
        ))}
    </div>
  );
}

export default ArtboardList;
