import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import cardReducer from './slices/cardSlice';
import transactionReducer from './slices/transactions';

const store = configureStore({
  reducer: {
    user: userReducer,
    card: cardReducer,
    transaction: transactionReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
