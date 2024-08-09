import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export interface BlogState {
  data: any | null,
  loading: boolean,
  error: string | null
}

const initialState: BlogState = {
  data: [],
  loading: false,
  error: null
}

  export const getSingleBlogById = createAsyncThunk<any, string, { rejectValue: any }>(
    'blog/getSingleBlogById',
    async (pathId, thunkAPI) => {
      try {
        const response = await axios.get(`https://goldfish-app-yhaxv.ondigitalocean.app/api/getBlogById/${pathId}`);
        return response.data.data;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );

  // Update the slice to handle the new async thunk
  export const singleblogSlice = createSlice({
    name: 'blogSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getSingleBlogById.pending, (state) => {
          state.loading = true;
        })
        .addCase(getSingleBlogById.fulfilled, (state, action: PayloadAction<any>) => {
          state.data = action.payload;
          state.loading = false;
          state.error = null;
        })
        .addCase(getSingleBlogById.rejected, (state, action: PayloadAction<any>) => {
          state.data = null;
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
export default singleblogSlice.reducer;
