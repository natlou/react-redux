import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from './index'

// use throughout the app instead of useDispatch and useSelector 
export const useAppDispatch: () => AppDispatch = useDispatch  // dont have to import AppDispatch everytime 
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector // dont need to include (state: RootState) everytime 