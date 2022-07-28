import Header from 'components/header/Header';
import { useGetDocument } from 'common/useRequest/useRequest';
import ArtboardList from './components/artboard-list/ArtboardList';

function DocumentPage() {
  const { data, isError, isLoading, isSuccess } = useGetDocument(
    'e981971c-ff57-46dc-a932-a60dc1804992'
  );
  const artboards = data?.version.document.artboards.entries || [];

  return (
    <>
      <Header title={data?.version.document.name} />
      <ArtboardList
        isError={isError}
        isLoading={isLoading}
        isSuccess={isSuccess}
        data={artboards}
      />
    </>
  );
}

export default DocumentPage;
