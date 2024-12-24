export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      border: {
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
        color: 'rgba(243, 243, 245, 1)',
      },
      border: {
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
  },
};

export const datasetsOptions = {
  borderWidth: 0,
  borderSkipped: false,
  borderRadius: 30,
  barPercentage: 0.5,
  categoryPercentage: 0.7,
};
