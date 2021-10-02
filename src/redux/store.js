import {configureStore} from '@reduxjs/toolkit'
import ToggleReducer from './slice/toggleSlice'
import CartReducer from './slice/cartSlice'


const store = configureStore({
    reducer: {
        toggle: ToggleReducer,
        cart: CartReducer
    } 
})

export default store;