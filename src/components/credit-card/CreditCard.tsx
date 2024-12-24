import React from 'react';
import { ChipIcon } from '../icons';
import { cn, createMaskedString } from '../../utils';
import { creditCardVariants } from './creditCardVariants';
import dayjs from 'dayjs';
import { VariantProps } from 'class-variance-authority';

const CREDIT_CARD = 'CreditCard';

interface CreditCardProps extends VariantProps<typeof creditCardVariants> {
  balance: number;
  cardHolder: string;
  expiryDate: Date;
  cardNumber: string;
}

const CreditCard: React.FC<CreditCardProps> = (props) => {
  const { balance, cardHolder, expiryDate, cardNumber, variant } = props;
  const isSecondaryVariant = variant === 'secondary';

  return (
    <div className={cn(creditCardVariants({ variant }))}>
      <div className='p-5 pt-3 md:px-6 md:pt-4 h-[121px] md:h-[165px] w-full flex flex-col gap-2 md:gap-6'>
        <div className='flex items-center justify-between'>
          <div>
            <label className='label'>Balance</label>
            <p className='description !text-base md:!text-xl !leading-[22px]'>${balance.toLocaleString('en-US')}</p>
          </div>
          <ChipIcon darkImage={isSecondaryVariant} />
        </div>

        <div className='grid grid-cols-2 items-center'>
          <div>
            <label className={cn('label', { '!text-light/70': isSecondaryVariant })}>CARD HOLDER</label>
            <p className='description'>
              {cardHolder.length > 14 ? createMaskedString(cardHolder, ' ......... ') : cardHolder}
            </p>
          </div>

          <div>
            <label className={cn('label', { '!text-light/70': isSecondaryVariant })}>VALID THRU</label>
            <p className='description'>{dayjs(expiryDate).format('MM/YY')}</p>
          </div>
        </div>
      </div>

      {/* footer */}
      <div
        className={cn(
          'w-full flex items-center justify-between rounded-b-large border-t border-primary-100 py-2 px-5 md:py-[19px] md:px-6',
          {
            'bg-credit-card-footer border-none py-3 md:py-5': isSecondaryVariant,
          }
        )}
      >
        <label className='description !text-[15px] md:!text-[22px] leading-[26px]'>
          {createMaskedString(cardNumber, '**** ****')}
        </label>

        <div
          className={cn('relative h-[18px] w-[18px] md:h-[30px] md:w-[30px] bg-gray-600/50 rounded-full', {
            'bg-light/50': isSecondaryVariant,
          })}
        >
          <div
            className={cn(
              'absolute -left-[9px] md:-left-[15px] h-[18px] w-[18px] md:h-[30px] md:w-[30px] bg-gray-600/50 rounded-full',
              {
                'bg-light/50': isSecondaryVariant,
              }
            )}
          ></div>
        </div>
      </div>
    </div>
  );
};

CreditCard.displayName = CREDIT_CARD;

export { CreditCard };
export type { CreditCardProps };
