import { ClosetContent } from '../../api/closet';
import { ActionType } from './types';

interface GetlistAction {
  type: ActionType.GET_LIST;
}

interface GetlistSuccessAction {
  type: ActionType.GET_LIST_SUCCESS;
  payload: ClosetContent[];
}

interface GetlistErrorAction {
  type: ActionType.GET_LIST_ERROR;
  payload: string;
}

export type Action = GetlistAction | GetlistSuccessAction | GetlistErrorAction;
