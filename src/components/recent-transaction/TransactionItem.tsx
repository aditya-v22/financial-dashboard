import { VariantProps } from 'class-variance-authority';
import React, { useMemo } from 'react';
import { CardsIcon, MoneyWithRingIcon, PaypalIcon } from '../icons';
import dayjs from 'dayjs';
import { cn } from '../../utils';
import { paymentPlatformVariants } from './transactionVariants';
import { TransactionFlowType, TransactionPlatformType } from './types';

const IconsMapping = {
  card: CardsIcon,
  paypal: PaypalIcon,
  other: MoneyWithRingIcon,
};

type TransactionIconProps = VariantProps<typeof paymentPlatformVariants>;

const TransactionIcon: React.FC<TransactionIconProps> = ({ platformType }) => {
  const Icon = useMemo(() => IconsMapping[platformType as keyof typeof IconsMapping], [platformType]);

  return (
    <div className={paymentPlatformVariants({ platformType })}>
      <Icon />
    </div>
  );
};

/**---------------------------------------------------------------------------------------------------------------------------
 * TransactionItem
 ---------------------------------------------------------------------------------------------------------------------------*/

interface TransactionItemProps {
  platformType: TransactionPlatformType;
  amount: number;
  date: Date;
  description: string;
  transactionFlow: TransactionFlowType;
}

const TransactionItem: React.FC<TransactionItemProps> = (props) => {
  const { amount, date, description, platformType, transactionFlow } = props;
  const isAmountIn = transactionFlow === TransactionFlowType.IN;

  return (
    <li className='flex items-center justify-between gap-4'>
      <div className='flex items-center gap-4'>
        <TransactionIcon platformType={platformType} />

        <div className='flex flex-col max-w-48'>
          <label className='text-base text-gray-950 font-medium truncate'>
            {description || isAmountIn ? 'Money Received' : 'Money Sent'}
          </label>
          <label className='text-primary-100 text-[15px]'>{dayjs(date).format('DD MMMM YYYY')}</label>
        </div>
      </div>

      <div>
        <label
          className={cn('font-medium', {
            'text-success-400': isAmountIn,
            'text-error-500': !isAmountIn,
          })}
        >
          {isAmountIn ? `+$${amount}` : `-$${amount}`}
        </label>
      </div>
    </li>
  );
};

export { TransactionItem };
