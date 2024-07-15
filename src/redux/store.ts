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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
