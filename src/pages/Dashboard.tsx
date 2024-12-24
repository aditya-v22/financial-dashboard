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
    <div className='py-2 px-4 lg:px-10 lg:py-[30px] bg-light lg:bg-gray-50'>
      <div className='grid gap-8'>
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8'>
          <MyCards />
          <DashboardRecentTransaction />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8'>
          <WeeklyActivity />
          <ExpensesStatistics />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-[445px_1fr] gap-8'>
          <DashboardQuickTransfer />
          <BalanceHistory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
