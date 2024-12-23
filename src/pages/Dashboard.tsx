import React from 'react';
import { registerChartComponents } from '../config/charts';

registerChartComponents();

const Dashboard: React.FC = () => {
  return <h1>Welcome to the Dashboard Page</h1>;
};

export default Dashboard;
