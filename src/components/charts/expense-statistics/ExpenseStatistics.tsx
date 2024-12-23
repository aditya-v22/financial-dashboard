import { Pie, ChartProps } from 'react-chartjs-2';
import ChartDataPlugin from 'chartjs-plugin-datalabels';
import { options } from './options';
import { useMemo } from 'react';

const EXPENSE_STATISTICS_CHART_NAME = 'ExpenseStatisticsChart';

interface ExpenseStatisticsChartProps {
  data: number[];
  height?: number;
  width?: number;
  className?: HTMLElement['className'];
}

const ExpenseStatisticsChart: React.FC<ExpenseStatisticsChartProps> = (props) => {
  const { data, className, height, width } = props;

  const chartData = useMemo(
    () => ({
      labels: ['Bill Expense', 'Others', 'Investment', 'Entertainment'],
      datasets: [
        {
          data,
          backgroundColor: [
            'rgba(252, 121, 0, 1)',
            'rgba(35, 35, 35, 1)',
            'rgba(57, 106, 255, 1)rgba(57, 106, 255, 1)',
            'rgba(52, 60, 106, 1)',
          ],
          offset: [60, 0, -20, 30],
          borderWidth: [0, 14, 14, 8], // Add spacing between slices
          borderColor: '#ffffff',
          rotation: 35,
          hoverBorderWidth: 0,
          hoverOffset: 0,
        },
      ],
    }),
    [data]
  );

  return (
    <Pie
      data={chartData}
      className={className}
      height={height}
      width={width}
      plugins={[ChartDataPlugin]}
      options={options as ChartProps<'pie'>['options']}
    />
  );
};

ExpenseStatisticsChart.displayName = EXPENSE_STATISTICS_CHART_NAME;
export { ExpenseStatisticsChart };
