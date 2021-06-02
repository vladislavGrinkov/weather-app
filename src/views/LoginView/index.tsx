import React, {
  FC,
  ChangeEvent,
  ReactElement,
  FormEvent, useState,
} from 'react';
import styled from 'styled-components';
import Cookie from 'js-cookie';
import { useAuthFetch } from './hooks/useAuthFetch';
import historyService from '../../services/history';
import { weathers } from './login';

export const LoginView: FC = (): ReactElement => {
  const {
    cred, handleSubmit, handleChange, isError, isAuth,
  } = useAuthFetch();
  const { username, password } = cred;
  if (Cookie.get('token')) historyService.replace(weathers);
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Пользователь</label>
          <input name="username" id="username" onChange={handleChange} value={username} />
        </div>
        <div>
          <label htmlFor="password">Пароль</label>
          <input name="password" type="password" onChange={handleChange} value={password} />
        </div>
        <div>
          <button type="submit">Войти</button>
        </div>
      </form>
    </Container>
  );
};

const Container = styled.div`
  width: 250px;
  margin: 0 auto;
  line-height: 2.5em;
`;