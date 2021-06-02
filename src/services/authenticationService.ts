export const registerUserService = (request: any) => {
  const REGISTER_API_ENDPOINT = '/api/v1/register';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request.user),
  };

  return fetch(REGISTER_API_ENDPOINT, parameters)
    .then((res) => res.json())
    .then((json) => json);
};

export const loginUserService = (request: any): Promise<any> => {
  const LOGIN_API_ENDPOINT = '/api/v1/login';

  console.log('REQ: ', request);
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request.user),
  };

  return fetch(LOGIN_API_ENDPOINT, parameters)
    .then((res) => res.json())
    .then((json) => json);
};