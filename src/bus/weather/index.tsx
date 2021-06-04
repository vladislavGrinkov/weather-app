import React, { FC, ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { Redirect, Route } from 'react-router-dom';
import { useWeathersFetch } from './hooks/useWeathersFetch';
import { Weather } from './types';
import historyService from '../../services/history';
import { login } from '../../views/LoginView/login';
import { logoutAction } from '../../views/LoginView/action';
import { Header, Wrapper } from '../../components/header';

export const Weathers: FC = (): ReactElement => {
  const { isFetching, data, error } = useWeathersFetch();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logoutAction());
    Cookies.remove('token', { path: '/' });
  };
  const errorMessageJSX = error && <p>{error}</p>;
  const loaderJSX = isFetching && <p>Loading data for API...</p>;
  const listJSX = isFetching
    || { results: [{ name: 'Moscow' }, { name: 'London' }] }.results.map(({ name }: Weather, index: number) => (
      <div className="row">
        <div className="col s12 m7" key={Number(index)}>
          <div className="card">
            <div className="card-image">
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <div className="icon" />
            </div>
            <div className="card-content">
              <p>{name}</p>
            </div>
            <div className="card-action">
              <a href="#12">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    ));
  return (
    <>
      <Header logout={handleLogOut} />
      <Wrapper>
        <h3 style={{ textAlign: 'center', marginTop: '1em', marginBottom: '1em' }}>Добро пожаловать в weather app!</h3>
        {errorMessageJSX}
        {loaderJSX}
        {listJSX}
      </Wrapper>
    </>
  );
};
