import { createSlice } from "@reduxjs/toolkit";


const LoginSlice = createSlice({
    name:'Login',
    initialState:{},
    reducers:{
        add(store,action){}
    }
})

export const {add} = LoginSlice.actions;
export default LoginSlice.reducer;