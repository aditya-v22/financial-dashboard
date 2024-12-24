import React from 'react';
import { Section } from './Section';
import Card from '../ui/Card';
import { ExpenseStatisticsChart } from '../charts/expense-statistics';

const EXPENSES_STATISTICS_NAME = 'ExpensesStatistics';

const ExpensesStatistics: React.FC = () => {
  return (
    <Section title='Expenses Statistics'>
      <Card
        aria-labelledby='bar-chart'
        className='max-h-[322px] h-[322px] p-0'
      >
        <div className='relative h-full w-full'>
          <ExpenseStatisticsChart
            data={[15, 35, 20, 30]}
            className='absolute -top-2'
          />
        </div>
      </Card>
    </Section>
  );
};

ExpensesStatistics.displayName = EXPENSES_STATISTICS_NAME;

export { ExpensesStatistics };
