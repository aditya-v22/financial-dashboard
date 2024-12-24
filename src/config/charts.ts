import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
} from 'chart.js';

export const registerChartComponents = () => {
  ChartJS.register(LineElement, BarElement, ArcElement, CategoryScale, LinearScale, PointElement, Filler, Tooltip);
};
