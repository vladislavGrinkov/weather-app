import { root } from './confing';
import { Weathers } from '../bus/weather/types';

export type FetchDataType<T> = () => Promise<T>;

type APIFetchDataTypes = {
  weather: {
    fetch: FetchDataType<Weathers>;
  };
};

export const api: APIFetchDataTypes = {
  weather: {
    fetch: (): Promise<Weathers> => fetch(`${root}Moscow&appid=df999e7d2e85ee16c3c2efc9b808d054`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((item) => ({ results: [{ name: item.name }] })),
  },
};
