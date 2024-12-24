import { FALLBACK_AVATAR } from '../../constants/images';
import { cn } from '../../utils';
import { Slider } from './Slider';

const CONTACTS_NAME = 'Contacts';

const contacts = [
  {
    id: '1',
    name: 'John Doe',
    profilePictureUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    type: 'CEO',
  },
  {
    id: '2',
    name: 'Lucy Kane',
    profilePictureUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
    type: 'Clerk',
  },
  {
    id: '3',
    name: 'John Doe',
    avatar: FALLBACK_AVATAR,
    balance: 2500,
  },
  {
    id: '4',
    name: 'John Doe',
  },
];

interface ContactsProps {
  selectedUser: string;
  setSelectedUser: (user: string) => void;
}

const Contacts: React.FC<ContactsProps> = ({ selectedUser, setSelectedUser }) => {
  return (
    <div>
      <div className='max-w-[350px]'>
        <Slider totalSlides={9}>
          <div
            role='button'
            aria-describedby='contact-1'
            onClick={() => setSelectedUser('1')}
            className='!flex flex-col items-center gap-2 md:gap-4 cursor-pointer hover:opacity-70'
          >
            <img
              src={FALLBACK_AVATAR}
              className='w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full object-cover'
            />

            <div>
              <h3
                className={cn('text-xs md:text-base text-gray-950 transition-all', {
                  'font-bold': selectedUser === '1',
                })}
              >
                John Doe
              </h3>
              <p
                className={cn('text-center text-xs md:text-[15px] text-primary-100', {
                  'font-bold': selectedUser === '1',
                })}
              >
                CEO
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

Contacts.displayName = CONTACTS_NAME;

export { Contacts };
