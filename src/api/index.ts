import { root, login } from './confing';
import { Weathers } from '../bus/weather/types';
import { TUsers } from '../views/LoginView/types';

export type FetchDataType<T> = () => Promise<T>;
export type FetchLoginType<T, U> = (data: U) => Promise<T>;

type APIFetchDataTypes = {
  weather: {
    fetch: FetchDataType<Weathers>;
  };
};

export type SendDataType = {
  isAuth: boolean;
  isError: boolean;
}

type APIFetchLoginTypes = {
  login: {
    fetch: FetchLoginType<SendDataType, TUsers>
  }
}

export const api: APIFetchDataTypes = {
  weather: {
    fetch: (): Promise<Weathers> => fetch(`${root}Moscow&appid=df999e7d2e85ee16c3c2efc9b808d054`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((item) => ({ results: [{ name: item.name }] })),
  },
};

export const apiLogin: APIFetchLoginTypes = {
  login: {
    fetch: (data): Promise<SendDataType> => {
      console.log('DATA', data);
      return fetch(login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((item) => ({ ...item }));
    },
  },
};
