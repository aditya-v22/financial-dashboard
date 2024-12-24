import { User } from '../../types/user';

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
