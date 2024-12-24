import React, { useEffect, useMemo } from 'react';
import { TransactionItem } from './TransactionItem';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchRecentTransactions } from '../../store/slices/transactions';
import Loader from '../ui/PageLoader';

const RECENT_TRANSACTION_NAME = 'RecentTransaction';

const RecentTransaction: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { errorWhileFetchingRecentTransactions, loadingRecentTransactions, recentTransactions } = useSelector(
    (state: RootState) => state.transaction
  );

  useEffect(() => {
    dispatch(fetchRecentTransactions());
  }, [dispatch]);

  const renderRecentTransactions = useMemo(() => {
    if (loadingRecentTransactions) {
      return (
        <div className='w-full min-h-32 h-full flex items-center justify-center'>
          <Loader />
        </div>
      );
    }

    if (errorWhileFetchingRecentTransactions) {
      return <p>{errorWhileFetchingRecentTransactions}</p>;
    }

    return recentTransactions.map((transaction) => (
      <TransactionItem
        key={transaction.id}
        amount={transaction.amount}
        date={new Date(transaction.date)}
        description={transaction.description}
        platformType={transaction.platformType}
        transactionFlow={transaction.transactionFlow}
      />
    ));
  }, [errorWhileFetchingRecentTransactions, loadingRecentTransactions, recentTransactions]);

  return <ul className='flex flex-col gap-2.5'>{renderRecentTransactions}</ul>;
};

RecentTransaction.displayName = RECENT_TRANSACTION_NAME;

export { RecentTransaction };
