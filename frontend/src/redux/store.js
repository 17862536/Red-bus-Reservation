import {configureStore} from '@reduxjs/toolkit';

//reducer imports go here
import busReducer from "./busSlice"
import tripReducer from "./tripSlice"
import customerInfoReducer from './customerInfoSlice';

export default configureStore({
    reducer:{
        //reducers go here in the format - reducerName: importedReducerAlias
       bus:busReducer,
       trips:tripReducer,
       customerInfo:customerInfoReducer
},
})