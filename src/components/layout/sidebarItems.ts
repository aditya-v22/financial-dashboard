import {
  HomeIcon,
  MoneyWithBarIcon,
  MoneyWithBulbIcon,
  MoneyWithCardIcon,
  MoneyWithHandIcon,
  SettingIcon,
  ToolsIcon,
  TransferMoneyIcon,
  UserIcon,
} from '../icons';

export const sidebarItems = [
  {
    label: 'Dashboard',
    href: '/',
    icon: HomeIcon,
  },
  {
    label: 'Transactions',
    href: '/transactions',
    icon: TransferMoneyIcon,
  },
  {
    label: 'Accounts',
    href: '/accounts',
    icon: UserIcon,
  },
  {
    label: 'Investments',
    href: '/investments',
    icon: MoneyWithBarIcon,
  },
  {
    label: 'Credit Cards',
    href: '/credit-cards',
    icon: MoneyWithCardIcon,
  },
  {
    label: 'Loans',
    href: '/loans',
    icon: MoneyWithHandIcon,
  },
  {
    label: 'Services',
    href: '/services',
    icon: ToolsIcon,
  },
  {
    label: 'My Privileges',
    href: '/my-privileges',
    icon: MoneyWithBulbIcon,
  },
  {
    label: 'Setting',
    href: '/settings',
    icon: SettingIcon,
  },
];

export const pageTitles = {
  '/': 'Dashboard',
  '/transactions': 'Transactions',
  '/accounts': 'Accounts',
  '/investments': 'Investments',
  '/credit-cards': 'Credit Cards',
  '/loans': 'Loans',
  '/services': 'Services',
  '/my-privileges': 'My Privileges',
  '/settings': 'Setting',
};
