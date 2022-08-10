import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../modules';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
