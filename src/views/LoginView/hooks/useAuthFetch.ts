import React, {
  ChangeEvent,
  useEffect,
  useState,
  FormEvent,
  SyntheticEvent,
} from 'react';
import Cookie from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction, fetchAsync, loginReset } from '../action';
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
  cookie: string | undefined,
}

export const useAuthFetch = (): TEvent & TResData => {
  const [cred, setCred] = useState<TUsers>({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();
  const { isError, isAuth } = useSelector<AppState, TState>((state) => state.LoginReducer);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(loginReset());
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
    cookie: Cookie.get('token'),
    cred,
    isAuth,
    isError,
    handleChange,
    handleSubmit,
  };
};
