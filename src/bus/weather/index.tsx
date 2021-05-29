import React, { FC } from 'react';
import { useWeathersFetch } from './hooks/useWeathersFetch';
import { Weather } from './types';

export const Weathers: FC = () => {
  const { isFetching, data, error } = useWeathersFetch();
  const errorMessageJSX = error && <p>{error}</p>;
  const loaderJSX = isFetching && <p>Loading data for API...</p>;
  const listJSX = isFetching
    || data.results.map(({ name }: Weather, index: number) => <li key={Number(index)}>{name}</li>);
  return (
    <>
      {errorMessageJSX}
      {loaderJSX}
      {listJSX}
    </>
  );
};
