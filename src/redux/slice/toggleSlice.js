import {createSlice} from '@reduxjs/toolkit'

const ToggleSlice = createSlice({
    name:'toggle',
    initialState: {togleado:false},
    reducers:{
        toggle(state){
            state.togleado = !state.togleado
        }
    },
});

export const toggleActions= ToggleSlice.actions;
export default ToggleSlice.reducer;