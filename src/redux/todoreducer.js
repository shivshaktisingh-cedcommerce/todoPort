import { createSlice } from "@reduxjs/toolkit";

export const todoreducer = createSlice({
    name:'todo' ,
    initialState:{
        todoArray:[] ,
    } ,
    reducers:{
        save:(state , action)=>{
            let currentDate = new Date().getDate() +"/"+ new Date().getMonth() +"/"+new Date().getFullYear()
          state.todoArray.push({date:currentDate , task:action.payload})
        }
    }

})
export const {save} = todoreducer.actions;
export default todoreducer.reducer;