import React, {
  ChangeEvent,
  useEffect,
  useState,
  FormEvent,
  SyntheticEvent,
} from 'react';

export type AuthType = {
  username: string;
  password: string;
  dirty: boolean;
};

export const useAuthFetch = () => {
  const [state, setState] = useState<AuthType>({
    username: '',
    password: '',
    dirty: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      dirty: false,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setState({
      ...state,
      dirty: true,
    });
  };

  return {
    ...state,
    handleChange,
    handleSubmit,
  };
};
