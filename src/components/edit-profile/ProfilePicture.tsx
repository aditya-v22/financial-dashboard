import React, { useRef } from 'react';
import { PencilIcon } from '../icons';
import { useField } from 'formik';
import { FALLBACK_AVATAR } from '../../constanst/images';

const ProfilePicture: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [field, _, helper] = useField({ name: 'profilePictureUrl' });

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      helper.setValue(URL.createObjectURL(file));
    }
  };

  return (
    <div className='relative'>
      <input
        hidden
        ref={inputRef}
        type='file'
        accept='image/*'
        multiple={false}
        onChange={onChange}
      />

      <img
        src={field.value || FALLBACK_AVATAR}
        alt='profile pic'
        className='w-[90px] h-[90px] object-cover rounded-full'
      />

      <div
        onClick={handleClick}
        className='z-10 absolute flex items-center justify-center bottom-0 -right-2 w-[30px] h-[30px] bg-gray-950 rounded-full cursor-pointer hover:bg-gray-700'
      >
        <PencilIcon className='text-light' />
      </div>
    </div>
  );
};

export { ProfilePicture };
