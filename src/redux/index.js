import {configureStore} from '@reduxjs/toolkit' 
import { ResultSlice, infoSlice } from './slices/characters/index'

// reducer 
import character from './slices/characters/index'

export default configureStore({
    reducer: {
        character,

    }
});

