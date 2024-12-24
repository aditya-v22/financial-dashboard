import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axios';
import { Card } from '../../types/cards';

interface CardState {
  loading: boolean;
  cards: Card[];
  error: string | null;
}

const initialState: CardState = {
  loading: false,
  cards: [],
  error: null,
};

export const fetchMyCards = createAsyncThunk('cards/fetchMyCards', async () => {
  const response = await axiosInstance.get('/my-cards');
  return response.data;
});

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyCards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMyCards.fulfilled, (state, action) => {
        state.loading = false;
        state.cards = action.payload;
      })
      .addCase(fetchMyCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch cards';
      });
  },
});

export default cardsSlice.reducer;
