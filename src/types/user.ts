export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  dob: Date | undefined;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
  profilePictureUrl?: string;
}

export interface UserInput {
  name: string;
  username: string;
  email: string;
  password: string;
  dob: Date | undefined;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
  profilePictureUrl?: string;
}
