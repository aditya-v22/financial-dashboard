import { Section } from './Section';
import Card from '../ui/Card';
import { RecentTransaction } from '../recent-transaction';

const RECENT_TRANSACTION_NAME = 'DashboardRecentTransaction';

const DashboardRecentTransaction = () => {
  return (
    <Section title='Recent Transaction'>
      <Card
        aria-labelledby='recent-transaction-card'
        className='p-6 max-h-[235px] overflow-y-auto scrollbar'
      >
        <RecentTransaction />
      </Card>
    </Section>
  );
};

DashboardRecentTransaction.displayName = RECENT_TRANSACTION_NAME;

export { DashboardRecentTransaction };
