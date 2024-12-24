import React from 'react';
import { Contacts } from './Contacts';
import Card from '../ui/Card';
import { AmountForm } from './AmountForm';

const QUICK_TRANSFER_NAME = 'QuickTransfer';

const QuickTransfer = () => {
  const [selectedUser, setSelectedUser] = React.useState('');

  return (
    <Card aria-labelledby={'quick-transfer-card'}>
      <div className='flex flex-col gap-6'>
        <Contacts
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
        <AmountForm />
      </div>
    </Card>
  );
};

QuickTransfer.displayName = QUICK_TRANSFER_NAME;
export { QuickTransfer };
