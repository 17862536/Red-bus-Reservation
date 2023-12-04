import {configureStore} from '@reduxjs/toolkit';

//reducer imports go here
import busReducer from "./busSlice"

export default configureStore({
    reducer:{
        //reducers go here in the format - reducerName: importedReducerAlias
       bus:busReducer,
},
})