import {createSlice} from '@reduxjs/toolkit'

const initialCartState = {
    products: [],
    totalQuantity:0,
    grandTotal:0
}

const cartSlice = createSlice({
    name:"cart",
    initialState: initialCartState,
    reducers:{
        anniadir(state, action){
            const {title, price} = action.payload;
            if(!state.products.some(val=>{
                return val.title===title
            })){
                let quantity = 1;
                let total = price*quantity;
                state.products.push({title, price, quantity, total});
                state.grandTotal+=total; 
            }
        },
        sumarProducto(state, action){
            const item = state.products.find(val=>{
                return val.title===action.payload
            })
            item.quantity++;
            item.total = item.quantity*item.price
            state.grandTotal+=item.price
        },
        restarProducto(state, action){
            const item = state.products.find(val=>{
                return val.title===action.payload
            })
            item.quantity--;
            item.total = item.quantity*item.price
            if(item.quantity===0){
                state.products = state.products.filter(val=>val.title!==action.payload)
            }
            state.grandTotal-=item.price
        }
    }
})

export const CartActions = cartSlice.actions

export default cartSlice.reducer