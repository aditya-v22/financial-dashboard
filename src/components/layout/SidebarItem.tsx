import { NavLink } from 'react-router-dom';
import { cn } from '../../utils';

const SIDEBAR_ITEM_NAME = 'SidebarItem';

type SidebarItemProps = {
  label: string;
  icon: React.ReactNode;
  href: string;
  isDisabled?: boolean;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ label, icon, href, isDisabled }) => {
  return (
    <NavLink
      to={href}
      aria-disabled={isDisabled}
      className={({ isActive }) =>
        cn(
          'group relative h-[60px] pl-11 pr-4 py-2 flex items-center gap-4 text-lg font-medium text-left w-full text-gray-200 hover:text-gray-500 transition-all',
          {
            'cursor-not-allowed opacity-50 hover:text-gray-200': isDisabled,
            '!text-gray-950': isActive,
          }
        )
      }
    >
      {icon}
      {label}

      <div className='absolute h-full w-1.5 bg-gray-950 left-0 rounded-r-small group-aria-[current=page]:block hidden transition-all duration-200 ease-out'></div>
    </NavLink>
  );
};

SidebarItem.displayName = SIDEBAR_ITEM_NAME;
export { SidebarItem };
export type { SidebarItemProps };
