import React from 'react';
import { Section } from './Section';
import Card from '../ui/Card';
import { WeeklyActivityChart } from '../charts/weekly-activity';

const WEEKLY_ACTIVITY_NAME = 'WeeklyActivity';

const WeeklyActivity: React.FC = () => {
  return (
    <Section title='Weekly Activity'>
      <Card
        aria-labelledby='bar-chart'
        className='max-h-[322px] h-[322px] pt-6 pb-4'
      >
        <div className='flex flex-col gap-6'>
          <div className='flex justify-end items-center gap-6'>
            <div className='flex gap-2 items-center'>
              <div className='w-[15px] h-[15px] bg-primary-600 rounded-full' />
              <label className='text-[15px] text-primary-100'>Deposit</label>
            </div>

            <div className='flex gap-2 items-center'>
              <div className='w-[15px] h-[15px] bg-gray-950 rounded-full' />
              <label className='text-[15px] text-primary-100'>Withdraw</label>
            </div>
          </div>

          <div className='w-full h-full'>
            <WeeklyActivityChart
              depositData={[50, 460, 350, 200, 180, 90, 120]}
              withdrawData={[30, 500, 130, 170, 140, 70, 420]}
              height={226}
            />
          </div>
        </div>
      </Card>
    </Section>
  );
};

WeeklyActivity.displayName = WEEKLY_ACTIVITY_NAME;

export { WeeklyActivity };
