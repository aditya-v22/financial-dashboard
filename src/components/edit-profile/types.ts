export interface EditProfileInput {
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
}
