import { ScriptableScaleContext } from 'chart.js';

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        color: (ctx: ScriptableScaleContext) => (ctx.index === 6 ? 'rgba(239, 243, 249, 1)' : 'rgba(223, 229, 238, 1)'),
        tickColor: 'rgba(113, 142, 191, 1)',
      },
      border: {
        dash: (ctx: ScriptableScaleContext) => (ctx.index === 6 ? undefined : [4]),
        display: false,
      },
      ticks: {
        color: 'rgba(113, 142, 191, 1)',
        font: {
          size: 13,
          family: 'Inter, sans-serif',
          weight: 400,
        },
        padding: 10,
      },
    },
    y: {
      grid: {
        color: 'rgba(223, 229, 238, 1)',
        tickColor: 'rgba(113, 142, 191, 1)',
      },
      border: {
        dash: [4],
        display: false,
      },
      ticks: {
        stepSize: 200,
        color: 'rgba(113, 142, 191, 1)',
        font: {
          size: 13,
          family: 'Inter, sans-serif',
          weight: 400,
        },
        padding: 10,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
};
