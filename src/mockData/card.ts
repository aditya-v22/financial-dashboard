import { Card } from '../types/cards';

export const mockCards: Card[] = [
  {
    id: '1',
    cardNumber: '1578256378251234',
    cardType: 'Credit',
    expiryDate: new Date('2023-12-31'),
    cardHolder: 'John Doe',
    balance: 1000,
  },
  {
    id: '0',
    cardNumber: '4587458512455678',
    cardType: 'Debit',
    expiryDate: new Date('2025-10-12'),
    cardHolder: 'Jane Smith',
    balance: 50000,
  },
  {
    id: '3',
    cardNumber: '1578256378255424',
    cardType: 'Credit',
    expiryDate: new Date('2023-12-31'),
    cardHolder: 'Peter Smith',
    balance: 10240,
  },
  {
    id: '4',
    cardNumber: '1578256378258756',
    cardType: 'Credit',
    expiryDate: new Date('2023-12-31'),
    cardHolder: 'Bob Smith',
    balance: 4100,
  },
];
