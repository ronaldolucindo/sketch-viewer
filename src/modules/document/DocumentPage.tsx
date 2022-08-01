import Header from 'components/header/Header';
import ArtboardList from './components/artboard-list/ArtboardList';
import useDocument from './useDocument';
import styles from './DocumentPage.module.scss';

function DocumentPage() {
  const {
    state,
    data,
    isError,
    isLoading,
    isSuccess,
    userOpensArtboard,
    userClosesArtboard,
    userClicksNextArtboard,
    userClicksPrevArtboard,
  } = useDocument();
  const artboards = data?.version.document.artboards.entries || [];

  return (
    <>
      <Header title={data?.version.document.name} />
      <main className={styles.main}>
        <ArtboardList
          isError={isError}
          isLoading={isLoading}
          isSuccess={isSuccess}
          data={artboards}
          state={state}
          userOpensArtboard={userOpensArtboard}
          userClosesArtboard={userClosesArtboard}
          userClicksNextArtboard={userClicksNextArtboard}
          userClicksPrevArtboard={userClicksPrevArtboard}
        />
      </main>
    </>
  );
}

export default DocumentPage;
