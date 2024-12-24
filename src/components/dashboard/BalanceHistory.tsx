import React from 'react';
import { Section } from './Section';
import Card from '../ui/Card';
import { BalanceHistoryChart } from '../charts/balance-history';

const BALANCE_HISTORY_NAME = 'BalanceHistory';

const BalanceHistory: React.FC = () => {
  return (
    <Section title='Balance History'>
      <Card
        aria-labelledby='bar-chart'
        className='max-h-[276px] h-[276px]'
      >
        <div className='h-full w-full'>
          <BalanceHistoryChart data={[300, 50, 550, 400, 300, 500, 200]} />
        </div>
      </Card>
    </Section>
  );
};

BalanceHistory.displayName = BALANCE_HISTORY_NAME;

export { BalanceHistory };
