import { Bar } from 'react-chartjs-2';
import { datasetsOptions, options } from './options';
import { useMemo } from 'react';

const WEEKLY_ACTIVITY_CHART_NAME = 'WeeklyActivityChart';

interface WeeklyActivityChartProps {
  depositData: number[];
  withdrawData: number[];
  height?: number;
  width?: number;
  className?: HTMLElement['className'];
}

const WeeklyActivityChart: React.FC<WeeklyActivityChartProps> = (props) => {
  const { depositData, withdrawData, className, height, width } = props;

  const chartData = useMemo(
    () => ({
      labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [
        {
          label: 'Deposit',
          data: depositData,
          backgroundColor: 'rgba(35, 35, 35, 1)',
          ...datasetsOptions,
        },
        {
          label: 'Withdraw',
          data: withdrawData,
          backgroundColor: 'rgba(57, 106, 255, 1)',
          ...datasetsOptions,
        },
      ],
    }),
    [depositData, withdrawData]
  );

  return (
    <Bar
      data={chartData}
      height={height}
      width={width}
      className={className}
      options={options}
    />
  );
};

WeeklyActivityChart.displayName = WEEKLY_ACTIVITY_CHART_NAME;
export { WeeklyActivityChart };
