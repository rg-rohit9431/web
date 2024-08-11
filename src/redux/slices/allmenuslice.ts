// fetch all menu for main page

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { baseUrl } from '../../main'
import axios from 'axios'

export interface MenuState {
  data: any | null,
  loading: boolean,
  error: string | null
}

const initialState: MenuState = {
  data: [],
  loading: false,
  error: null
}

export const fetchAllCategoryDetails = createAsyncThunk<any, { id: string }, { rejectValue: any }>(
    'menu/fetchAllMenuDetails',
    async ({ id }, thunkAPI) => {
      try {
        const response = await axios.get(`${baseUrl}/api/menu/${id}`)
        // console.log(response.data)
        return response.data
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data)
      }
    }
  )

export const allmenuSlice = createSlice({
  name: 'menuSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategoryDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllCategoryDetails.fulfilled, (state, action: PayloadAction<any>) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAllCategoryDetails.rejected, (state, action: PayloadAction<any>) => {
        state.data = null;
        state.loading = false;
        state.error = action.payload;
      })
  },
})



export default allmenuSlice.reducer
