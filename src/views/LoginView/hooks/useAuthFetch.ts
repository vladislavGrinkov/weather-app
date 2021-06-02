import React, {
  ChangeEvent,
  useEffect,
  useState,
  FormEvent,
  SyntheticEvent,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction, fetchAsync } from '../action';
import { TUsers } from '../types';
import { AppState } from '../../../init/rootReducer';
import { TState } from '../reducer';

export type TEvent = {
  handleChange(e: ChangeEvent<HTMLInputElement>): void;
  handleSubmit(e: SyntheticEvent): void;
  cred: TUsers
}

export type TResData = {
  isError: boolean,
  isAuth: boolean,
}

export const useAuthFetch = (): TEvent & TResData => {
  const [cred, setCred] = useState<TUsers>({
    username: '',
    password: '',
  });
  const dispatch = useDispatch();
  const { isError, isAuth } = useSelector<AppState, TState>((state) => state.LoginReducer);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCred({
      ...cred,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(fetchAsync(cred));
  };

  return {
    cred,
    isAuth,
    isError,
    handleChange,
    handleSubmit,
  };
};
