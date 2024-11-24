import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "currentUser",
  initialState: JSON.parse(localStorage.getItem("user")) || null,
  reducers: {
    login: (state, action) => {
      localStorage.setItem("user", JSON.stringify({ ...action.payload }));
      return {
        ...action.payload,
      };
    },

    logout:(state)=>{
     localStorage.removeItem('user');
     state=null;
    },
    
    updateUser:(state,action)=>{
          let newState = action.payload;

          return newState;
    }
  },
});

export default UserSlice;
export const { login,logout,updateUser} = UserSlice.actions;
