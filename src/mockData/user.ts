import { User } from '../types/user';

export const mockUserData: User = {
  id: 1,
  name: 'Jane Smith',
  username: 'jane_smith',
  email: 'jane.smith@example.com',
  password: 'securePass!45',
  dob: new Date('1985-08-25'),
  presentAddress: '789 Oak Avenue',
  permanentAddress: '101 Maple Road',
  city: 'Los Angeles',
  postalCode: '90001',
  country: 'USA',
  profilePictureUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
};

export const quickTransferContacts = [
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
    type: 'Designer',
  },
  {
    id: '3',
    name: 'Karen Parker',
    profilePictureUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    type: 'Manager',
  },
  {
    id: '4',
    name: 'Tom Smith',
    profilePictureUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
    type: 'Developer',
  },
  {
    id: '5',
    name: 'Sarah Johnson',
    profilePictureUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
    type: 'UI/UX',
  },
  {
    id: '6',
    name: 'Alex Brown',
    profilePictureUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
    type: 'Manager',
  },
];
