import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { baseUrl } from '../../main'
import axios from 'axios'

export interface FavoriteState {
  data: any | null,
  loading: boolean,
  error: string | null
}

const initialState: FavoriteState = {
  data: [],
  loading: false,
  error: null
}
interface FavoriteData{
    id: string, userId: string 
}

export const favoriteMenuDetails = createAsyncThunk<any, FavoriteData , { rejectValue: any }>(
    'menu/favoriteMenu',
    async ({ id ,userId }, thunkAPI) => {
      try {
        const response = await axios.get(`${baseUrl}/api/favourites/${userId}/${id}`)
        // console.log(response.data)
        return response.data.favoriteMenuItems
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data)
      }
    }
  )

export const favoriteSlice = createSlice({
  name: 'favoriteSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(favoriteMenuDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(favoriteMenuDetails.fulfilled, (state, action: PayloadAction<any>) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(favoriteMenuDetails.rejected, (state, action: PayloadAction<any>) => {
        state.data = null;
        state.loading = false;
        state.error = action.payload;
      })
  },
})



export default favoriteSlice.reducer
