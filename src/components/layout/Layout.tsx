import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cn } from '../../utils';
import { SoarLogo, XIcon } from '../icons';
import { sidebarItems } from './sidebarItems';
import { Header } from './Header';
import { SidebarItem } from './SidebarItem';
import { fetchUser } from '../../store/slices/userSlice';
import { PageLoader } from '../ui/PageLoader';
import { AppDispatch, RootState } from '../../store/store';
import { Button } from '../ui/button';

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.user);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    dispatch(fetchUser()); // Fetch user data when component mounts
  }, [dispatch]);

  if (error) {
    return (
      <div className='flex min-h-[var(--app-root-winh)]'>
        <div className='flex w-full min-h-[var(--app-root-winh)] justify-center items-center'>
          <h1 className='text-2xl font-bold text-primary-900'>{error || 'Something went wrong'}</h1>
        </div>
      </div>
    );
  }

  return (
    <div className='flex min-h-[var(--app-root-winh)]'>
      {loading ? (
        <PageLoader />
      ) : (
        <>
          {/* Sidebar */}
          <div
            className={cn(
              'fixed top-0 left-0 max-sm:min-w-full md:min-w-[350px] lg:min-w-[250px] max-h-[var(--app-root-winh)] overflow-auto bg-light transform transition-transform duration-300 ease-in-out z-[51] lg:translate-x-0',
              'lg:sticky md:top-0 md:min-h-[var(--app-root-winh)] md:border-r lg:border-primary-200',
              {
                '-translate-x-full': !isSidebarOpen, // Hidden state for small screens
                '!translate-x-0': isSidebarOpen, // Visible state for small screens
              }
            )}
          >
            <div className='h-[100px] flex items-center justify-between'>
              <Link
                to={'/'}
                className='flex pl-11 items-center gap-2 hover:opacity-70 transition-all duration-200'
              >
                <SoarLogo className='text-gray-950' />
                <h2 className='text-[25px] text-primary-900 font-extrabold'>Soar Task</h2>
              </Link>

              <Button
                onClick={() => setIsSidebarOpen(false)}
                className='lg:hidden h-10 w-10 mr-6 bg-light p-0 ring-0 hover:bg-transparent hover:ring-0 focus-visible:ring-primary-900'
              >
                <XIcon className=' text-primary-900 h-8 w-8' />
              </Button>
            </div>

            <div className='space-y-1 mt-2.5'>
              {sidebarItems.map((item) => (
                <SidebarItem
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  icon={<item.icon />}
                  isDisabled={false}
                  onClick={toggleSidebar}
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
        </>
      )}
    </div>
  );
};

export default Layout;
