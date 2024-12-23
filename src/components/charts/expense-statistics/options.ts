import { Context } from 'chartjs-plugin-datalabels';

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
    datalabels: {
      color: 'rgba(255, 255, 255, 1)',
      font: {
        weight: 700,
        size: 13,
        family: 'Inter, sans-serif',
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      formatter: (value: any, context: Context) => {
        return `${value}%\n${context.chart?.data?.labels?.[context.dataIndex]}`;
      },
      textAlign: 'center',
      clamp: true,
      anchor: 'center',
      align: (context: Context) => {
        const index = context.dataIndex;
        return index === 0 ? 'end' : index === 3 ? 'end' : 'left';
      },
      offset: (context: Context) => {
        const index = context.dataIndex;
        return index === 0 ? -12 : index === 3 ? -10 : -30;
      },
    },
  },
};
