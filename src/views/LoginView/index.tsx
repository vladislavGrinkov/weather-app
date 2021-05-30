import React, {
  FC,
  ChangeEvent,
  ReactElement,
  FormEvent, useState,
} from 'react';
import styled from 'styled-components';
import { useAuthFetch } from './hooks/useAuthFetch';

export const LoginView: FC = (): ReactElement => {
  const {
    username, password, dirty, handleSubmit, handleChange,
  } = useAuthFetch();
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
        {dirty && <div>SUCCESS</div>}
      </form>
    </Container>
  );
};

const Container = styled.div`
  width: 250px;
  margin: 0 auto;
  line-height: 2.5em;
  border: 1px solid black;
`;