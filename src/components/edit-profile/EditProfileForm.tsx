import React from 'react';
import { InputField } from '../form/InputField';
import { Button } from '../ui/button';
import { DatePickerField } from '../form';
import { ProfilePicture } from './ProfilePicture';

const EDIT_PROFILE_FORM_NAME = 'EditProfileForm';

interface EditProfileFormProps {
  isLoading: boolean;
  apiError: string | null;
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({ isLoading, apiError }) => {
  return (
    <>
      <div className='flex flex-col lg:flex-row gap-[22px] md:gap-14'>
        <div className='flex-shrink-0 flex justify-center items-center lg:block'>
          <ProfilePicture />
        </div>

        <div className='flex-grow grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-1 md:gap-y-3'>
          <InputField
            name='name'
            label='Your Name'
            placeholder='Enter Name'
          />

          <InputField
            name='username'
            label='User Name'
            placeholder='Enter Username '
          />

          <InputField
            name='email'
            label='Email'
            placeholder='Enter Email'
          />

          <InputField
            name='password'
            label='Password'
            type='password'
            placeholder='Enter Password'
          />

          <DatePickerField
            name='dob'
            label='Date of Birth'
            placeholder='Select Date of Birth'
            PickerProps={{ captionLayout: 'dropdown' }}
          />

          <InputField
            name='presentAddress'
            label='Present Address'
            placeholder='Enter Present Address'
          />

          <InputField
            name='permanentAddress'
            label='Permanent Address'
            placeholder='Enter Permanent Address'
          />

          <InputField
            name='city'
            label='City'
            placeholder='Enter City'
          />

          <InputField
            name='postalCode'
            label='Postal Code'
            type='number'
            InputProps={{ min: 0 }}
            placeholder='Enter Postal Code'
          />

          <InputField
            name='country'
            label='Country'
            placeholder='Enter Country'
          />
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center gap-2 md:gap-10 mt-1 md:mt-8'>
        <p className='text-error-500 text-xs'>{apiError}</p>
        <Button
          type='submit'
          size='lg'
          loading={isLoading}
          className='max-md:w-full'
        >
          Save
        </Button>
      </div>
    </>
  );
};

EditProfileForm.displayName = EDIT_PROFILE_FORM_NAME;

export { EditProfileForm };
