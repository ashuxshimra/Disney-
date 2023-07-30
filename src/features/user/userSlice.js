//we have made this new user folder within features to kind of maintain the user state management using redux so say if user exsists then do this do that
import { createSlice } from "@reduxjs/toolkit";
// here slice refers to a slices of big functionalities
//now lets start reedux work withj the empty state  
const initialState= {
name:"",
email:"",
photo:""
}

const userSlice=createSlice({
    name: "user",
    initialState,
    reducers:{
      //now lets address the state changes
      setUserLogin:(state, action)=>{ //managing the state change when user logs in
      state.name=action.payload.name; //referring the action done by user for name , email and reducer takes it changes state acc
      state.email=action.payload.email;
      state.photo=action.payload.photo;
      },
      setSignOut: (state)=>{
        // when user signs out then we cant show certain things anymore as defined here of the applciation
        state.name=null;
        state.email=null;
        state.photo=null;
      }    
    }
})
export const {setUserLogin, setSignOut}=userSlice.actions; //these are our actions and exporting that is when user sign out stop showing application so thus this state management 
export const selectUserName =(state)=> state.user.name; //selecting user name
export const selectUserEmail =(state)=> state.user.email;
export const selectUserPhoto =(state)=> state.user.photo;

//now export the reducer
export default userSlice.reducer;   
//so now go and import use it in store.js