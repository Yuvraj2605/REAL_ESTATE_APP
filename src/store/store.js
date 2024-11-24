import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./userSilce";

const store =  configureStore({
  reducer: {
    currentUser:UserSlice.reducer 
  }
});

export default store;
