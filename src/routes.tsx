import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { Layout } from './components/layout';
import { PageLoader } from './components/ui/PageLoader';
import Transactions from './pages/Transactions';
import Accounts from './pages/Accounts';
import Investments from './pages/Investment';
import CreditCards from './pages/CreditCards';
import Loans from './pages/Loans';
import Services from './pages/Services';
import MyPrivileges from './pages/MyPrivileges';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Settings = React.lazy(() => import('./pages/Settings'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const WithSuspense: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <React.Suspense fallback={<PageLoader />}>{children}</React.Suspense>;
};

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true, // Default route
        element: (
          <WithSuspense>
            <Dashboard />
          </WithSuspense>
        ),
      },
      {
        path: 'dashboard',
        element: (
          <WithSuspense>
            <Dashboard />
          </WithSuspense>
        ),
      },
      {
        path: 'transactions',
        element: (
          <WithSuspense>
            <Transactions />
          </WithSuspense>
        ),
      },
      {
        path: 'accounts',
        element: (
          <WithSuspense>
            <Accounts />
          </WithSuspense>
        ),
      },
      {
        path: 'investments',
        element: (
          <WithSuspense>
            <Investments />
          </WithSuspense>
        ),
      },
      {
        path: 'credit-cards',
        element: (
          <WithSuspense>
            <CreditCards />
          </WithSuspense>
        ),
      },
      {
        path: 'loans',
        element: (
          <WithSuspense>
            <Loans />
          </WithSuspense>
        ),
      },
      {
        path: 'services',
        element: (
          <WithSuspense>
            <Services />
          </WithSuspense>
        ),
      },
      {
        path: 'my-privileges',
        element: (
          <WithSuspense>
            <MyPrivileges />
          </WithSuspense>
        ),
      },
      {
        path: 'settings',
        element: (
          <WithSuspense>
            <Settings />
          </WithSuspense>
        ),
      },
    ],
  },
  { path: '*', element: <NotFound /> }, // Catch-all route for 404
];

export const AppRoutes: React.FC = () => {
  const element = useRoutes(routes);
  return element;
};
