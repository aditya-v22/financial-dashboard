import React from 'react';
import { BellIcon, SettingIcon } from '../icons';
import { Button } from '../ui/button';
import { FALLBACK_AVATAR } from '../../constanst/images';
import { Link, useLocation } from 'react-router-dom';
import { pageTitles } from './sidebarItems';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { GlobalSearch } from './GlobalSearch';
import { cn } from '../../utils';

const HEADER_NAME = 'Header';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const location = useLocation();
  const { user } = useSelector((state: RootState) => state.user);

  const currentPageTitle = pageTitles[location.pathname as keyof typeof pageTitles];

  return (
    <header
      aria-label='header'
      className={
        'bg-light min-h-[140px] md:min-h-[101px] w-full border-b border-primary-200 flex md:flex-row flex-col justify-between items-center p-6 lg:px-10 lg:sticky lg:top-0 z-50 max-lg:border-b-0'
      }
    >
      <div className='w-full flex justify-between items-center'>
        {/* Menu button */}
        <button
          aria-label='toggle sidebar'
          className='lg:hidden text-primary-900 focus:outline-none'
          onClick={toggleSidebar}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-8 h-8'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/* Header title */}
        <h1
          aria-label='header title'
          className='text-xl items-start md:text-[28px] font-semibold text-primary-900'
        >
          {currentPageTitle}
        </h1>
        {/* Right Header actions */}
        <div className='flex items-center gap-2.5'>
          <GlobalSearch className='hidden md:flex' />

          <Link
            to='/settings'
            className='hidden md:block'
          >
            <Button
              aria-label='settings'
              className='text-primary-100 !rounded-full h-[50px] w-[50px] bg-gray-50 ring-gray-50 hover:bg-primary-100 hover:ring-gray-100'
            >
              <SettingIcon />
            </Button>
          </Link>

          <Button
            aria-label='notifications'
            className='hidden md:inline-flex text-primary-600 !rounded-full h-[50px] w-[50px] bg-gray-50 ring-gray-50 hover:bg-primary-100 hover:ring-gray-100'
          >
            <BellIcon />
          </Button>

          <img
            aria-label='user avatar'
            src={user?.profilePictureUrl || FALLBACK_AVATAR}
            className='w-[35px] h-[35px] md:w-[60px] md:h-[60px] rounded-full'
          />
        </div>{' '}
      </div>

      {/* Only visible on mobile */}
      <GlobalSearch className='md:hidden max-w-full mt-4' />
    </header>
  );
};

Header.displayName = HEADER_NAME;
export { Header };
export type { HeaderProps };
