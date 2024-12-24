import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { cn } from '../../utils';
import { SoarLogo } from '../icons';
import { sidebarItems } from './sidebarItems';
import { Header } from './Header';
import { SidebarItem } from './SidebarItem';

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {}, []);

  return (
    <div className='flex min-h-[var(--app-root-winh)]'>
      {/* Sidebar */}
      <div
        className={cn(
          'fixed top-0 left-0 lg:min-w-[250px] max-h-[var(--app-root-winh)] overflow-auto bg-light transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-0',
          'md:sticky md:top-0 md:min-h-[var(--app-root-winh)] lg:border-r lg:border-primary-200',
          {
            '-translate-x-full': !isSidebarOpen, // Hidden state for small screens
            'translate-x-0': isSidebarOpen, // Visible state for small screens
          }
        )}
      >
        <div className='h-[100px] flex items-center'>
          <Link
            to={'/'}
            className='flex pl-11 items-center gap-2 hover:opacity-70 transition-all duration-200'
          >
            <SoarLogo className='text-gray-950' />
            <h2 className='text-[25px] text-primary-900 font-extrabold'>Soar Task</h2>
          </Link>
        </div>

        <div className='space-y-1 mt-2.5'>
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.label}
              label={item.label}
              href={item.href}
              icon={<item.icon />}
              isDisabled={false}
            />
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className='flex-1 flex flex-col'>
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <main className='flex-1'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;