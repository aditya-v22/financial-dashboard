import React, { useEffect, useMemo } from 'react';
import { Section } from './Section';
import Card from '../ui/Card';
import { BalanceHistoryChart } from '../charts/balance-history';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchBalanceHistory } from '../../store/slices/graphDataSlice';
import Loader from '../ui/PageLoader';

const BALANCE_HISTORY_NAME = 'BalanceHistory';

const BalanceHistory: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { balanceHistory, errorWhileFetchingBalanceHistory, loadingBalanceHistory } = useSelector(
    (state: RootState) => state.graphData
  );

  useEffect(() => {
    dispatch(fetchBalanceHistory());
  }, [dispatch]);

  const renderBalanceHistory = useMemo(() => {
    if (loadingBalanceHistory) {
      return (
        <div className='w-full min-h-32 h-full flex items-center justify-center'>
          <Loader />
        </div>
      );
    }

    if (errorWhileFetchingBalanceHistory) {
      return <p>{errorWhileFetchingBalanceHistory}</p>;
    }

    return <BalanceHistoryChart data={balanceHistory} />;
  }, [balanceHistory, errorWhileFetchingBalanceHistory, loadingBalanceHistory]);

  return (
    <Section title='Balance History'>
      <Card
        aria-labelledby='bar-chart'
        className='max-h-[276px] h-[276px]'
      >
        <div className='h-full w-full'>{renderBalanceHistory}</div>
      </Card>
    </Section>
  );
};

BalanceHistory.displayName = BALANCE_HISTORY_NAME;

export { BalanceHistory };
