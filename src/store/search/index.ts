import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import Config from 'react-native-config';

import { objToQuery } from '../../utils';
import IExercise from '../../interfaces/IExercise';
import ISearchQuery from '../../interfaces/ISearchQuery';

const API_URL = 'https://api.api-ninjas.com/v1/exercises';

export interface SearchState {
  data: IExercise[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  data: [],
  loading: false,
  error: null,
} as SearchState;

export const fetchData = createAsyncThunk(
  'search/fetchData',
  async (obj: ISearchQuery, thunkApi) => {
    try {
      const response = await axios.get(API_URL + objToQuery(obj), {
        headers: {
          'X-Api-Key': Config.API_KEY,
        },
      });
      return response.data;
    } catch (err: any) {
      return thunkApi.rejectWithValue(err.message);
    }
  },
);

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    clearData: state => {
      state.data = [];
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, state => {
        state.loading = true;
      })
      .addCase(
        fetchData.fulfilled,
        (state, action: PayloadAction<IExercise[]>) => {
          state.loading = false;
          state.data = action.payload;
        },
      )
      .addCase(fetchData.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearData } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
