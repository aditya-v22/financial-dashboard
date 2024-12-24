export type TransactionPlatformType = 'paypal' | 'card' | 'other';

export enum TransactionFlowType {
  IN = 'IN',
  OUT = 'OUT',
}

export interface RecentTransaction {
  id: string;
  amount: number;
  platformType: TransactionPlatformType;
  transactionFlow: TransactionFlowType;
  date: string;
  description: string;
}
