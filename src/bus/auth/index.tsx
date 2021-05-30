import React, { FC, ReactNode, ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { login } from '../../views/LoginView/login';
import historyService from '../../services/history';

export type Props = {
  children: ReactElement
}

export const AuthComponent = ({ children }: Props) => {
  const title = null;
  if (title === null) historyService.replace(login);
  return children;
};
