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
      <div className='px-6 pt-4 h-[165px] w-full flex flex-col gap-6'>
        <div className='flex items-center justify-between'>
          <div>
            <label className='label'>Balance</label>
            <p className='description !text-xl !leading-[22px]'>${balance.toLocaleString('en-US')}</p>
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
          'w-full flex items-center justify-between rounded-b-large border-t border-primary-100 py-[19px] px-6',
          {
            'bg-credit-card-footer border-none py-5': isSecondaryVariant,
          }
        )}
      >
        <label className='description !text-[22px] leading-[26px]'>{createMaskedString(cardNumber, '**** ****')}</label>

        <div
          className={cn('relative h-[30px] w-[30px] bg-gray-600/50 rounded-full', {
            'bg-light/50': isSecondaryVariant,
          })}
        >
          <div
            className={cn('absolute -left-[15px] h-[30px] w-[30px] bg-gray-600/50 rounded-full', {
              'bg-light/50': isSecondaryVariant,
            })}
          ></div>
        </div>
      </div>
    </div>
  );
};

CreditCard.displayName = CREDIT_CARD;

export { CreditCard };
export type { CreditCardProps };
