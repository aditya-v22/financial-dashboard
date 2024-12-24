import { useCallback, useState } from 'react';
import { FALLBACK_AVATAR } from '../../constants/images';
import { cn } from '../../utils';
import { ArrowIcon } from '../icons';
import { quickTransferContacts } from '../../mockData/user';

const CONTACTS_NAME = 'Contacts';

interface ContactsProps {
  selectedUser: string;
  setSelectedUser: (user: string) => void;
}

const Contacts: React.FC<ContactsProps> = ({ selectedUser, setSelectedUser }) => {
  const [showArrow, setShowArrow] = useState(true);
  const [usersToShow, setUsersToShow] = useState(quickTransferContacts.slice(0, 3));

  const showAllContacts = useCallback(() => {
    setUsersToShow(quickTransferContacts);
    setShowArrow(false);
  }, []);

  return (
    <div>
      <div className='relative transition-all flex items-center gap-8 w-full overflow-x-auto overflow-y-hidden scrollbar'>
        {usersToShow.map((contact) => (
          <div
            key={contact.id}
            role='button'
            aria-describedby={`Quick Transfer User- ${contact.name}`}
            data-selected={selectedUser === contact.id}
            onClick={() => setSelectedUser(contact.id)}
            className='group transition-all !flex flex-shrink-0 flex-col items-center gap-2 md:gap-4 pb-1.5 cursor-pointer hover:opacity-70'
          >
            <img
              src={contact.profilePictureUrl || FALLBACK_AVATAR}
              className='w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full object-cover'
            />

            <div>
              <h3 className={'text-xs md:text-base text-gray-950 transition-all group-data-[selected=true]:font-bold'}>
                {contact.name}
              </h3>
              <p className={'text-center text-xs md:text-[15px] text-primary-100 group-data-[selected=true]:font-bold'}>
                {contact.type}
              </p>
            </div>
          </div>
        ))}

        {showArrow && (
          <button
            className={cn(
              'absolute right-2 transition-all z-10 flex-shrink-0 h-10 w-10 md:h-[50px] md:w-[50px] flex items-center justify-center bg-light shadow-shadow-1 text-primary-100 rounded-full'
            )}
            onClick={showAllContacts}
          >
            <ArrowIcon direction={'right'} />
          </button>
        )}
      </div>
    </div>
  );
};

Contacts.displayName = CONTACTS_NAME;

export { Contacts };
