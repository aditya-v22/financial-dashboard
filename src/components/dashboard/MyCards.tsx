import { Section } from './Section';
import { CreditCard } from '../credit-card';

const CARD_NAME = 'MyCards';

const MyCards = () => {
  return (
    <Section
      title='My Cards'
      headerProps={{ showButton: true, buttonText: 'See All' }}
    >
      <div className='flex gap-7'>
        <CreditCard
          balance={100}
          cardHolder='John Doe'
          expiryDate={new Date('2023-12-31')}
          cardNumber={'123456789012'}
        />
        <CreditCard
          variant='secondary'
          balance={100}
          cardHolder='John Doe'
          expiryDate={new Date('2023-12-31')}
          cardNumber={'123456789012'}
        />
      </div>
    </Section>
  );
};

MyCards.displayName = CARD_NAME;
export { MyCards };
