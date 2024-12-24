import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { mockUserData } from './data/user';

// Create an instance of Axios
const axiosInstance = axios.create({
  baseURL: 'https://api.soar.com',
  timeout: 2000,
});

// Create an instance of MockAdapter
const mock = new MockAdapter(axiosInstance);

// Setup mock responses
mock.onGet('/user').reply(200, {
  user: mockUserData,
});

mock.onPut('/user').reply((config) => {
  const updatedUser = JSON.parse(config.data);
  return [200, { ...updatedUser }];
});

export default axiosInstance;
