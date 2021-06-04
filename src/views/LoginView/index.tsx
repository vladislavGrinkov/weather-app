import React, {
  FC,
  ChangeEvent,
  ReactElement,
  FormEvent, useState, useEffect,
} from 'react';
import styled from 'styled-components';
import Cookie from 'js-cookie';
import { Redirect, Route } from 'react-router-dom';
import { useAuthFetch } from './hooks/useAuthFetch';
import historyService from '../../services/history';
import { weathers } from './login';

export const LoginView: FC = (): ReactElement => {
  const {
    cred, handleSubmit, handleChange, isError, isAuth, cookie,
  } = useAuthFetch();
  const { username, password } = cred;
  console.log(Cookie.get('token'));
  if (isAuth || Cookie.get('token')) historyService.replace(weathers);
  if (isAuth) {
    return (
      <Route>
        <Redirect to="/" />
      </Route>
    );
  }
  if (Cookie.get('token')) {
    return (
      <Route>
        <Redirect to="/" />
      </Route>
    );
  }
  if (!Cookie.get('token') || isAuth) {
    return (
      <Wrapper>
        <Container>
          <form className="col s15" onSubmit={handleSubmit} autoComplete="off">
            <div className="row">
              <div className="input-field col s15">
                <input id="username" type="text" className="validate" name="username" onChange={handleChange} />
                <label style={{ fontSize: '18px' }} htmlFor="username">логин</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s15">
                <input autoComplete="new-password" id="password" type="password" name="password" onChange={handleChange} />
                <label style={{ fontSize: '18px' }} htmlFor="password">пароль</label>
              </div>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action">
              Войти
            </button>
            {isError && (
              <p style={{ color: 'red', marginTop: '1em' }}>
                Произошла
                <br />
                неизвестная
                <br />
                ошибка
              </p>
            )}
          </form>
        </Container>
      </Wrapper>
    );
  }
  return <div>loading...</div>;
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  //border: 1px solid black;
  height: 500px;
  width: 300px;
  //margin: 0 auto;
  line-height: 2em;
  text-align: center;
  box-shadow: 0px 0px 10px 10px #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
`;