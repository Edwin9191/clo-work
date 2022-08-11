import axios, { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { getList } from '../../api/closet';
import { Action } from './actions';
import { ActionType } from './types';

export const getListThunk = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_LIST,
    });

    try {
      const list = await getList();
      dispatch({
        type: ActionType.GET_LIST_SUCCESS,
        payload: list,
      });
    } catch (error: AxiosError | unknown) {
      if (axios.isAxiosError(error)) {
        dispatch({
          type: ActionType.GET_LIST_ERROR,
          payload: error.message,
        });
      }
    }
  };
};
