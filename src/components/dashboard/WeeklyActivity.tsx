import React, { useEffect, useMemo } from 'react';
import { Section } from './Section';
import Card from '../ui/Card';
import { WeeklyActivityChart } from '../charts/weekly-activity';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchWeeklyActivity } from '../../store/slices/graphDataSlice';
import Loader from '../ui/PageLoader';

const WEEKLY_ACTIVITY_NAME = 'WeeklyActivity';

const WeeklyActivity: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { weeklyActivity, errorWhileFetchingWeeklyActivity, loadingWeeklyActivity } = useSelector(
    (state: RootState) => state.graphData
  );

  useEffect(() => {
    dispatch(fetchWeeklyActivity());
  }, [dispatch]);

  const renderWeeklyActivity = useMemo(() => {
    if (loadingWeeklyActivity) {
      return (
        <div className='w-full min-h-32 h-full flex items-center justify-center'>
          <Loader />
        </div>
      );
    }

    if (errorWhileFetchingWeeklyActivity) {
      return <p>{errorWhileFetchingWeeklyActivity}</p>;
    }

    return (
      <WeeklyActivityChart
        depositData={weeklyActivity.deposit}
        withdrawData={weeklyActivity.withdraw}
        height={226}
        className='h-[204px] lg:h-[226px]'
      />
    );
  }, [weeklyActivity, errorWhileFetchingWeeklyActivity, loadingWeeklyActivity]);

  return (
    <Section title='Weekly Activity'>
      <Card
        aria-labelledby='bar-chart'
        className='max-h-[254px] h-[254px] md:max-h-[322px] md:h-[322px] p-4 md:px-[30px] md:pt-6 md:pb-4'
      >
        <div className='flex flex-col gap-1 md:gap-6'>
          <div className='flex justify-end items-center gap-6'>
            <div className='flex gap-2 items-center'>
              <div className='w-3 h-3 md:w-[15px] md:h-[15px] bg-primary-600 rounded-full' />
              <label className='text-xs md:text-[15px] text-primary-100'>Deposit</label>
            </div>

            <div className='flex gap-2 items-center'>
              <div className='w-3 h-3 md:w-[15px] md:h-[15px] bg-gray-950 rounded-full' />
              <label className='text-xs md:text-[15px] text-primary-100'>Withdraw</label>
            </div>
          </div>

          <div className='w-full h-full'>{renderWeeklyActivity}</div>
        </div>
      </Card>
    </Section>
  );
};

WeeklyActivity.displayName = WEEKLY_ACTIVITY_NAME;

export { WeeklyActivity };
