import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axios';
import { RecentTransaction } from '../../types/transactions';

interface TransactionState {
  loadingRecentTransactions: boolean;
  recentTransactions: RecentTransaction[];
  errorWhileFetchingRecentTransactions: string | null;
}

const initialState: TransactionState = {
  loadingRecentTransactions: false,
  recentTransactions: [],
  errorWhileFetchingRecentTransactions: null,
};

export const fetchRecentTransactions = createAsyncThunk('transaction/fetchRecentTransactions', async () => {
  const response = await axiosInstance.get('/recent-transactions');
  return response.data;
});

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecentTransactions.pending, (state) => {
        state.loadingRecentTransactions = true;
        state.errorWhileFetchingRecentTransactions = null;
      })
      .addCase(fetchRecentTransactions.fulfilled, (state, action) => {
        state.loadingRecentTransactions = false;
        state.recentTransactions = action.payload;
      })
      .addCase(fetchRecentTransactions.rejected, (state, action) => {
        state.loadingRecentTransactions = false;
        state.errorWhileFetchingRecentTransactions = action.error.message || 'Failed to fetch recent transactions';
      });
  },
});

export default transactionSlice.reducer;
