import {createSlice} from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit';
//axios
import axios from 'axios'

export const characterSlice = createSlice({
    name : "character",
    initialState:{
        listCharacters :[],
        
    },
    reducers:{
        setListCharacters :(state, action) => {
            state.listCharacters = action.payload;
        },
        
    }

});



export const {setListCharacters } = characterSlice.actions;


export default characterSlice.reducer;



export const apiData = (url) => (dispatch) =>{
    axios.get(url)
    .then((response) => {
       dispatch(setListCharacters(response.data))
       
        
        
        
        
    }).catch((error) => console.log(error))
    
    
}
