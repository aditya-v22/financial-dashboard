import React from 'react';
import { BellIcon, SearchIcon, SettingIcon } from '../icons';
import { Button } from '../ui/button';
import { FALLBACK_AVATAR } from '../../constanst/images';
import { Link } from 'react-router-dom';

const HEADER_NAME = 'Header';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header
      aria-label='header'
      className='bg-light lg:min-h-[101px] border-b border-primary-200 flex justify-between items-center lg:px-10 lg:sticky lg:top-0 lg:z-50'
    >
      <button
        aria-label='toggle sidebar'
        className='lg:hidden text-white focus:outline-none'
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
      <h1
        aria-label='header title'
        className='text-[28px] font-semibold text-primary-900'
      >
        Overview
      </h1>

      <div
        aria-label='global search box'
        className='flex items-center gap-2.5'
      >
        <div className='flex items-center h-[50px] w-full max-w-[255px] rounded-[40px] bg-gray-50 pl-6 gap-2.5'>
          <SearchIcon className='text-primary-100' />
          <input
            type='text'
            placeholder='Search for something'
            className='bg-transparent outline-none border-none placeholder:text-primary-50 text-[15px] pl-2 pr-6 w-full h-full caret-primary-900 text-primary-900'
          />
        </div>

        <Link to='/settings'>
          <Button
            aria-label='settings'
            className='text-primary-100 !rounded-full h-[50px] w-[50px] bg-gray-50 ring-gray-50 hover:bg-primary-100 hover:ring-gray-100'
          >
            <SettingIcon />
          </Button>
        </Link>

        <Button
          aria-label='notifications'
          className='text-primary-600 !rounded-full h-[50px] w-[50px] bg-gray-50 ring-gray-50 hover:bg-primary-100 hover:ring-gray-100'
        >
          <BellIcon />
        </Button>

        <img
          aria-label='user avatar'
          src={FALLBACK_AVATAR}
          className='w-[60px] h-[60px] rounded-full'
        />
      </div>
    </header>
  );
};

Header.displayName = HEADER_NAME;
export { Header };
export type { HeaderProps };
