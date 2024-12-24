import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { mockUserData } from '../mockData/user';
import { mockCards } from '../mockData/card';
import {
  mockBalanceHistory,
  mockExpenseStatistics,
  mockRecentTransactions,
  mockWeeklyTransactions,
} from '../mockData/transactions';

// Create an instance of Axios
const axiosInstance = axios.create({
  baseURL: 'https://api.soar.com',
  timeout: 2000,
});

// Create an instance of MockAdapter
const mock = new MockAdapter(axiosInstance);

// Setup mock responses

// User
mock.onGet('/user').reply(200, {
  user: mockUserData,
});

mock.onPut('/user').reply((config) => {
  const updatedUser = JSON.parse(config.data);
  return [200, { ...updatedUser }];
});

// Cards
mock.onGet('/my-cards').reply(200, mockCards);

// Trasactions
mock.onGet('/recent-transactions').reply(200, mockRecentTransactions);
mock.onGet('/weekly-activity').reply(200, mockWeeklyTransactions);
mock.onGet('/balance-history').reply(200, mockBalanceHistory);
mock.onGet('/expense-statistics').reply(200, mockExpenseStatistics);

export default axiosInstance;
