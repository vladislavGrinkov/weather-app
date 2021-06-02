import React, { FC, ReactElement } from 'react';
import Cookie from 'js-cookie';
import { useWeathersFetch } from './hooks/useWeathersFetch';
import { Weather } from './types';
import historyService from '../../services/history';
import { login } from '../../views/LoginView/login';

export const Weathers: FC = (): ReactElement => {
  const { isFetching, data, error } = useWeathersFetch();
  const errorMessageJSX = error && <p>{error}</p>;
  const loaderJSX = isFetching && <p>Loading data for API...</p>;
  const listJSX = isFetching
    || data.results.map(({ name }: Weather, index: number) => <li key={Number(index)}>{name}</li>);
  if (!Cookie.get('token')) historyService.replace(login);
  return (
    <>
      {errorMessageJSX}
      {loaderJSX}
      {listJSX}
    </>
  );
};
