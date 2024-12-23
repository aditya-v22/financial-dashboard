import { ScriptableContext } from 'chart.js';
import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import { options } from './options';

const BALANCE_HISTORY_CHART_NAME = 'BalanceHistoryChart';

interface BalanceHistoryChartProps {
  data: number[];
  height?: number;
  width?: number;
  className?: HTMLElement['className'];
}

const BalanceHistoryChart: React.FC<BalanceHistoryChartProps> = (props) => {
  const { data, className, height = 220, width } = props;

  const chartData = useMemo(
    () => ({
      labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
      datasets: [
        {
          data,
          label: 'Balance History',
          borderColor: 'rgba(24, 20, 243, 1)',

          backgroundColor: (context: ScriptableContext<'line'>) => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
            if (!chartArea) {
              return '';
            }

            const gradient = ctx.createLinearGradient(5, chartArea.top, 0, chartArea.bottom);
            gradient.addColorStop(0, '#2D60FF40');
            gradient.addColorStop(1, '#2D60FF00');
            return gradient;
          },
          fill: true,
          tension: 0.4,
          borderWidth: 3,
          pointRadius: 0,
          pointHoverRadius: 0,
        },
      ],
    }),
    [data]
  );

  return (
    <Line
      data={chartData}
      className={className}
      height={height}
      width={width}
      options={options}
    />
  );
};

BalanceHistoryChart.displayName = BALANCE_HISTORY_CHART_NAME;
export { BalanceHistoryChart };
