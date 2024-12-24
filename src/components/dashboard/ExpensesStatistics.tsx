import React, { useEffect, useMemo } from 'react';
import { Section } from './Section';
import Card from '../ui/Card';
import { ExpenseStatisticsChart } from '../charts/expense-statistics';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchExpenseStatistics } from '../../store/slices/graphDataSlice';
import Loader from '../ui/PageLoader';

const EXPENSES_STATISTICS_NAME = 'ExpensesStatistics';

const ExpensesStatistics: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { expenseStatistics, errorWhileFetchingExpenseStatistics, loadingExpenseStatistics } = useSelector(
    (state: RootState) => state.graphData
  );

  useEffect(() => {
    dispatch(fetchExpenseStatistics());
  }, [dispatch]);

  const renderExpensesStatistics = useMemo(() => {
    if (loadingExpenseStatistics) {
      return (
        <div className='w-full min-h-32 h-full flex items-center justify-center'>
          <Loader />
        </div>
      );
    }

    if (errorWhileFetchingExpenseStatistics) {
      return <p>{errorWhileFetchingExpenseStatistics}</p>;
    }

    return (
      <ExpenseStatisticsChart
        data={expenseStatistics}
        className='absolute -top-2'
      />
    );
  }, [expenseStatistics, errorWhileFetchingExpenseStatistics, loadingExpenseStatistics]);

  return (
    <Section title='Expenses Statistics'>
      <Card
        aria-labelledby='bar-chart'
        className='max-h-[322px] h-[322px] p-0'
      >
        <div className='relative h-full w-full'>{renderExpensesStatistics}</div>
      </Card>
    </Section>
  );
};

ExpensesStatistics.displayName = EXPENSES_STATISTICS_NAME;

export { ExpensesStatistics };
