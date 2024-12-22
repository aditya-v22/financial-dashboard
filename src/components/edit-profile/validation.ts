import * as Yup from 'yup';

export const editProfileFormValidationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters'),
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username cannot exceed 20 characters')
    .matches(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
  email: Yup.string().required('Email is required').email('Invalid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(100, 'Password cannot exceed 100 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[@$!%*?&]/, 'Password must contain at least one special character'),
  dob: Yup.date().required('Date of Birth is required').max(new Date(), 'Date of Birth cannot be in the future'),
  presentAddress: Yup.string().required('Present address is required').max(200, 'Address cannot exceed 200 characters'),
  permanentAddress: Yup.string()
    .required('Permanent address is required')
    .max(200, 'Address cannot exceed 200 characters'),
  city: Yup.string().required('City is required').max(100, 'City cannot exceed 100 characters'),
  postalCode: Yup.string()
    .required('Postal code is required')
    .matches(/^[0-9]{5}(-[0-9]{4})?$/, 'Invalid postal code format'),
  country: Yup.string().required('Country is required').max(100, 'Country cannot exceed 100 characters'),
});
