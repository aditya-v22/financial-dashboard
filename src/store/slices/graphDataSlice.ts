import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axios';

interface GraphDataState {
  loadingWeeklyActivity: boolean;
  weeklyActivity: { deposit: number[]; withdraw: number[] };
  errorWhileFetchingWeeklyActivity: string | null;
  // Expense Statistics
  loadingExpenseStatistics: boolean;
  expenseStatistics: number[];
  errorWhileFetchingExpenseStatistics: string | null;
  // Balance History
  loadingBalanceHistory: boolean;
  balanceHistory: number[];
  errorWhileFetchingBalanceHistory: string | null;
}

const initialState: GraphDataState = {
  loadingWeeklyActivity: false,
  weeklyActivity: { deposit: [], withdraw: [] },
  errorWhileFetchingWeeklyActivity: null,

  loadingExpenseStatistics: false,
  expenseStatistics: [],
  errorWhileFetchingExpenseStatistics: null,

  loadingBalanceHistory: false,
  balanceHistory: [],
  errorWhileFetchingBalanceHistory: null,
};

export const fetchWeeklyActivity = createAsyncThunk('graphData/fetchWeeklyActivity', async () => {
  const response = await axiosInstance.get('/weekly-activity');
  return response.data;
});

export const fetchExpenseStatistics = createAsyncThunk('graphData/fetchExpenseStatistics', async () => {
  const response = await axiosInstance.get('/expense-statistics');
  return response.data;
});

export const fetchBalanceHistory = createAsyncThunk('graphData/fetchBalanceHistory', async () => {
  const response = await axiosInstance.get('/balance-history');
  return response.data;
});

const graphDataSlice = createSlice({
  name: 'graphData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeeklyActivity.pending, (state) => {
        state.loadingWeeklyActivity = true;
        state.errorWhileFetchingWeeklyActivity = null;
      })
      .addCase(fetchWeeklyActivity.fulfilled, (state, action) => {
        state.loadingWeeklyActivity = false;
        state.weeklyActivity = action.payload;
      })
      .addCase(fetchWeeklyActivity.rejected, (state, action) => {
        state.loadingWeeklyActivity = false;
        state.errorWhileFetchingWeeklyActivity = action.error.message || 'Failed to fetch weekly activity data';
      })
      .addCase(fetchExpenseStatistics.pending, (state) => {
        state.loadingExpenseStatistics = true;
        state.errorWhileFetchingExpenseStatistics = null;
      })
      .addCase(fetchExpenseStatistics.fulfilled, (state, action) => {
        state.loadingExpenseStatistics = false;
        state.expenseStatistics = action.payload;
      })
      .addCase(fetchExpenseStatistics.rejected, (state, action) => {
        state.loadingExpenseStatistics = false;
        state.errorWhileFetchingExpenseStatistics = action.error.message || 'Failed to fetch expenses statistics data';
      })
      .addCase(fetchBalanceHistory.pending, (state) => {
        state.loadingBalanceHistory = true;
        state.errorWhileFetchingBalanceHistory = null;
      })
      .addCase(fetchBalanceHistory.fulfilled, (state, action) => {
        state.loadingBalanceHistory = false;
        state.balanceHistory = action.payload;
      })
      .addCase(fetchBalanceHistory.rejected, (state, action) => {
        state.loadingBalanceHistory = false;
        state.errorWhileFetchingBalanceHistory = action.error.message || 'Failed to fetch balance history data';
      });
  },
});

export default graphDataSlice.reducer;
