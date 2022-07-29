import { useGetDocument } from 'common/useRequest/useRequest';
import { useReducer } from 'react';
import documentReducer, {
  INITIAL_STATE,
  DocumentActions,
} from './documentReducer';

function useDocument() {
  const [state, dispatch] = useReducer(documentReducer, INITIAL_STATE);
  const { data, isError, isLoading, isSuccess } = useGetDocument(
    'e981971c-ff57-46dc-a932-a60dc1804992'
  );

  const userOpensArtboard = (index: number) => {
    return dispatch({
      type: DocumentActions.userOpensArtboard,
      payload: index,
    });
  };
  const userClosesArtboard = () => {
    return dispatch({
      type: DocumentActions.userClosesArtboard,
    });
  };
  const userClicksNextArtboard = () => {
    return dispatch({
      type: DocumentActions.userClicksNextArtboard,
    });
  };
  const userClicksPrevArtboard = () => {
    return dispatch({
      type: DocumentActions.userClicksPrevArtboard,
    });
  };

  return {
    state,
    data,
    isError,
    isLoading,
    isSuccess,
    userOpensArtboard,
    userClosesArtboard,
    userClicksNextArtboard,
    userClicksPrevArtboard,
  };
}

export default useDocument;
