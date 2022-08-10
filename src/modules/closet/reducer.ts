import { Action } from './actions';
import { ActionType } from './types';
import { ClosetContent } from '../../api/closet';

export type ClosetState = {
  list: {
    loading: boolean;
    error: string | null;
    data: ClosetContent[] | null;
  };
};

const initialState: ClosetState = {
  list: {
    data: null,
    loading: false,
    error: null,
  },
};

const reducer = (
  state: ClosetState = initialState,
  action: Action,
): ClosetState => {
  switch (action.type) {
    case ActionType.GET_LIST:
      return {
        ...state,
        list: {
          loading: true,
          error: null,
          data: null,
        },
      };
    case ActionType.GET_LIST_SUCCESS:
      return {
        ...state,
        list: {
          loading: false,
          error: null,
          data: action.payload,
        },
      };

    case ActionType.GET_LIST_ERROR:
      return {
        ...state,
        list: {
          loading: false,
          error: action.payload,
          data: null,
        },
      };
    default:
      return state;
  }
};

export default reducer;
