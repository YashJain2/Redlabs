import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../slices/services/baseApi";
 
export default configureStore({
 reducer: {
   [baseApi.reducerPath]: baseApi.reducer,
 },
});