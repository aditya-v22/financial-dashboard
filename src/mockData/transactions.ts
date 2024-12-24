import { RecentTransaction, TransactionFlowType } from '../types/transactions';

export const mockRecentTransactions: RecentTransaction[] = [
  {
    id: '1',
    platformType: 'card',
    description: 'Grocery shopping',
    date: '2024-12-20',
    amount: 500.75,
    transactionFlow: TransactionFlowType.OUT,
  },
  {
    id: '2',
    platformType: 'paypal',
    description: 'Freelance Payment',
    date: '2024-12-21',
    amount: 2000,
    transactionFlow: TransactionFlowType.IN,
  },
  {
    id: '3',
    platformType: 'other',
    description: 'Gym Membership',
    date: '2024-12-18',
    amount: 300.0,
    transactionFlow: TransactionFlowType.OUT,
  },
];

export const mockWeeklyTransactions = {
  deposit: [50, 460, 350, 400, 180, 290, 120],
  withdraw: [30, 500, 130, 170, 140, 100, 420],
};

export const mockBalanceHistory = [300, 50, 550, 400, 780, 500, 200];

export const mockExpenseStatistics = [15, 35, 20, 30];
