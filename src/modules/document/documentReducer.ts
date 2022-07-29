export type DocumentState = typeof INITIAL_STATE;
export enum DocumentActions {
  userOpensArtboard = 'USER_OPENS_ARTBOARD',
  userClosesArtboard = 'USER_CLOSES_ARTBOARD',
  userClicksNextArtboard = 'USER_CLICKS_NEXT_ARTBOARD',
  userClicksPrevArtboard = 'USER_CLICKS_PREV_ARTBOARD',
}
type Action =
  | { type: DocumentActions.userOpensArtboard; payload: number }
  | { type: DocumentActions.userClosesArtboard }
  | { type: DocumentActions.userClicksNextArtboard }
  | { type: DocumentActions.userClicksPrevArtboard };

export const INITIAL_STATE = {
  currentArtboard: 0,
  isViewerOpen: false,
};

function documentReducer(state: DocumentState, action: Action): DocumentState {
  switch (action.type) {
    case DocumentActions.userOpensArtboard:
      return {
        ...state,
        isViewerOpen: true,
        currentArtboard: action.payload,
      };
    case DocumentActions.userClosesArtboard:
      return {
        ...state,
        isViewerOpen: false,
        currentArtboard: 0,
      };
    case DocumentActions.userClicksNextArtboard:
      return {
        ...state,
        currentArtboard: state.currentArtboard + 1,
      };
    case DocumentActions.userClicksPrevArtboard:
      return {
        ...state,
        currentArtboard: state.currentArtboard - 1,
      };

    default:
      return state;
  }
}

export default documentReducer;
