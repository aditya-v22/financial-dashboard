import { FALLBACK_AVATAR } from '../../constanst/images';
import { cn } from '../../utils';
import { Slider } from './Slider';

const CONTACTS_NAME = 'Contacts';

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
            className='!flex flex-col items-center gap-4 cursor-pointer hover:opacity-70'
          >
            <img
              src={FALLBACK_AVATAR}
              className='w-[70px] h-[70px] rounded-full object-cover'
            />

            <div>
              <h3 className={cn('text-base text-gray-950 transition-all', { 'font-bold': selectedUser === '1' })}>
                John Doe
              </h3>
              <p className={cn('text-center text-[15px] text-primary-100', { 'font-bold': selectedUser === '1' })}>
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
