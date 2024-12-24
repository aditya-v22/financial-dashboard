import React from 'react';
import { Button } from '../ui/button';
import { SendIcon } from '../icons';

const AMOUNT_NAME = 'AmountForm';

const AmountForm: React.FC = () => {
  return (
    <div className='flex justify-between gap-8 items-center'>
      <label className='text-base text-primary-100 flex-shrink-0'>Write Amount</label>

      <div className='relative flex items-center h-[50px] w-[265px] rounded-[50px] bg-gray-200'>
        <input
          type='number'
          min={0}
          aria-labelledby='write-amount'
          placeholder='0.00'
          className='w-[145px] px-5 outline-none border-none h-full bg-transparent rounded-[50px] caret-primary-100 text-primary-100 placeholder:text-primary-100/40 text-base appearance-none group-[input]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
        />
        <Button
          size='lg'
          className='absolute right-0 !rounded-[50px] px-0 !w-[125px] ring-inset max-h-[50px] ring-gray-950'
        >
          Send <SendIcon />
        </Button>
      </div>
    </div>
  );
};

AmountForm.displayName = AMOUNT_NAME;

export { AmountForm };
