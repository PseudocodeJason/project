import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './slices/loginSlice'
import userReducer  from './slices/userSlice'
import registerReducer from './slices/registrationSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
    registration: registerReducer
  },
})