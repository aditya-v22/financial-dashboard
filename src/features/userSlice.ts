import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../mocks/axios';
import { User, UserInput } from '../types/user';

interface UserState {
  loading: boolean;
  user: User | null;
  error: string | null;
  errorWhileUpdating: string | null;
}

const initialState: UserState = {
  loading: false,
  user: null,
  error: null,
  errorWhileUpdating: null,
};

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const response = await axiosInstance.get('/user');

  return response.data;
});

export const updateUser = createAsyncThunk('user/updateUser', async (updatedUser: UserInput) => {
  const response = await axiosInstance.put('/user', updatedUser);
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload?.user;
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch user';
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.errorWhileUpdating = null;
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.errorWhileUpdating = action.error.message || 'Failed to update user';
      });
  },
});

export default userSlice.reducer;
