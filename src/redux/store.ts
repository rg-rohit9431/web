import { configureStore } from '@reduxjs/toolkit'
import restaurentslice from './slices/restaurentslice'
import menuSlice from './slices/menuslice'
import menuSearchSlice from './slices/searchmenu'

export const store = configureStore({
  reducer: {
    'restaurant': restaurentslice,
    'allMenuDetails': menuSlice,
    'searchMenu': menuSearchSlice,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
