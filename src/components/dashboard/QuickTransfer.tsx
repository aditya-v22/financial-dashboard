import React from 'react';
import { Section } from './Section';
import { QuickTransfer } from '../quick-transfer';

const DASHBOARD_QUICK_TRANSFER_NAME = 'DashboardQuickTransfer';

const DashboardQuickTransfer: React.FC = () => {
  return (
    <Section title='Quick Transfer'>
      <div className='h-[276px]'>
        <QuickTransfer />
      </div>
    </Section>
  );
};

DashboardQuickTransfer.displayName = DASHBOARD_QUICK_TRANSFER_NAME;
export { DashboardQuickTransfer };
