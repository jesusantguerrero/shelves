import axios from './axios';
import { useApplication } from '../utils/useApplication';

export const onLogin = (formData) => {
  return axios.post('/authentication', {
    ...formData,
    strategy: 'local'
  }).then(({ data }) => {
    localStorage.setItem('shelvesToken', data.accessToken);
    return data;
  });
};

const { user, token, setToken } = useApplication();

export const getToken = async () => {
  if (localStorage.getItem('shelvesToken')) {
    return localStorage.getItem('shelvesToken');
  } else {
    if (!user) {
      await getUser();
    }
    return token;
  }
};

export const getUser = () => {
  return axios.get('/authentication').then(({ data }) => {
    localStorage.setItem('shelvesToken', data.accessToken);
    setToken(data.accessToken);
    return data;
  });
};
