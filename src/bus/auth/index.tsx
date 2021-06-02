import React, { FC, ReactNode, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import Cookie from 'js-cookie';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { login } from '../../views/LoginView/login';
import historyService from '../../services/history';
import { AppState } from '../../init/rootReducer';
import { TState } from '../../views/LoginView/reducer';

export type Props = {
  children: ReactElement
}

export const AuthComponent = ({ children }: Props) => {
  const { isAuth } = useSelector<AppState, TState>((state) => state.LoginReducer);
  console.log(isAuth);
  if (Cookie.get('token')) historyService.replace(login);
  return Cookie.get('token') ? children : null;
};
