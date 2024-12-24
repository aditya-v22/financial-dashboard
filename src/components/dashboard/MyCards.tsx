import { Section } from './Section';
import { CreditCard } from '../credit-card';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { useEffect, useMemo } from 'react';
import { fetchMyCards } from '../../store/slices/cardSlice';
import Loader from '../ui/PageLoader';
import { useNavigate } from 'react-router-dom';

const CARD_NAME = 'MyCards';

const MyCards = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { cards, error, loading } = useSelector((state: RootState) => state.card);

  useEffect(() => {
    dispatch(fetchMyCards());
  }, [dispatch]);

  const renderCards = useMemo(() => {
    if (loading) {
      return (
        <div className='w-full min-h-32 h-full flex items-center justify-center'>
          <Loader />
        </div>
      );
    }

    if (error) {
      return <p>{error}</p>;
    }

    return cards.slice(0, 2).map((card, index) => (
      <CreditCard
        key={card.id}
        variant={index % 2 === 0 ? 'secondary' : 'primary'}
        balance={card.balance}
        cardHolder={card.cardHolder}
        expiryDate={card.expiryDate}
        cardNumber={card.cardNumber}
      />
    ));
  }, [cards, error, loading]);

  return (
    <Section
      title='My Cards'
      className='relative'
      headerProps={{
        showButton: true,
        buttonText: 'See All',
        ButtonProps: { className: 'absolute right-0', onClick: () => navigate('/credit-cards') },
      }}
    >
      <div className='flex gap-7 overflow-x-auto max-md:pb-1.5 overflow-y-hidden scrollbar'>{renderCards}</div>
    </Section>
  );
};

MyCards.displayName = CARD_NAME;
export { MyCards };
