import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { WeathersState } from '../reducer';
import { AppState } from '../../../init/rootReducer';
import { fetchAsync } from '../action';

export const useWeathersFetch = (): WeathersState => {
  const dispatch = useDispatch();
  const { data, error, isFetching } = useSelector<AppState, WeathersState>(
    (state) => state.weather,
  );

  useEffect(() => {
    dispatch(fetchAsync());
  }, [dispatch]);

  return {
    data,
    error,
    isFetching,
  };
};
