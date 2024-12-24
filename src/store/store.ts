import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import cardReducer from './slices/cardSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    card: cardReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
