import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchMyCards } from '../store/slices/cardSlice';
import Loader from '../components/ui/PageLoader';
import { CreditCard } from '../components/credit-card';
import { Section } from '../components/dashboard/Section';

const CreditCards: React.FC = () => {
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

    return cards.map((card, index) => (
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
    <div className='bg-gray-50 min-h-full w-full pt-10 px-10'>
      <Section title='My Cards'>
        <div className='flex flex-wrap gap-7 pb-10'>{renderCards}</div>
      </Section>
    </div>
  );
};

export default CreditCards;
