import React from 'react';
import { registerChartComponents } from '../config/charts';
import {
  BalanceHistory,
  DashboardQuickTransfer,
  ExpensesStatistics,
  MyCards,
  WeeklyActivity,
} from '../components/dashboard';
import { DashboardRecentTransaction } from '../components/dashboard/RecentTransaction';

registerChartComponents();

const Dashboard: React.FC = () => {
  return (
    <div className='mx-10 my-[30px]'>
      <div className='grid gap-8'>
        <div className='grid grid-cols-[1fr_350px] gap-8'>
          <MyCards />
          <DashboardRecentTransaction />
        </div>

        <div className='grid grid-cols-[1fr_350px] gap-8'>
          <WeeklyActivity />
          <ExpensesStatistics />
        </div>

        <div className='grid grid-cols-[445px_1fr] gap-8'>
          <DashboardQuickTransfer />
          <BalanceHistory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
