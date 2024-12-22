import React from 'react';
import Card from '../ui/Card';
import { TransactionItem } from './TransactionItem';
import { TransactionFlowType } from './types';

const RECENT_TRANSACTION_NAME = 'RecentTransaction';

const RecentTransaction: React.FC = () => {
  return (
    <Card
      aria-labelledby='recent-transaction-card'
      className='py-6 max-h-[235px] overflow-y-auto scrollbar'
    >
      <ul className='flex flex-col gap-2.5'>
        <TransactionItem
          amount={100}
          date={new Date('2023-01-01')}
          description='Money Received'
          platformType={'card'}
          transactionFlow={TransactionFlowType.IN}
        />
        <TransactionItem
          amount={100}
          date={new Date('2023-01-01')}
          description='Money Received'
          platformType={'paypal'}
          transactionFlow={TransactionFlowType.OUT}
        />
        <TransactionItem
          amount={100}
          date={new Date('2023-01-01')}
          description='Money Received'
          platformType={'other'}
          transactionFlow={TransactionFlowType.IN}
        />
        <TransactionItem
          amount={100}
          date={new Date('2023-01-01')}
          description='Money Received'
          platformType={'card'}
          transactionFlow={TransactionFlowType.IN}
        />
      </ul>
    </Card>
  );
};

RecentTransaction.displayName = RECENT_TRANSACTION_NAME;

export { RecentTransaction };
