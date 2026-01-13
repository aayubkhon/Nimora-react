import { createSlice } from "@reduxjs/toolkit";
import { CommunityPageState } from '../../types/screen';


const initialState: CommunityPageState = {
   tergetBoArticles: [],
}

const CommunityPageSlice = createSlice({
   name:"communityPage",
   initialState,
   reducers:{
      setTargetBoArticles:(state,action)=>{
         state.tergetBoArticles=action.payload
      }
   }
})

export const {setTargetBoArticles} = CommunityPageSlice.actions;

const CommunityPageReducer = CommunityPageSlice.reducer
export default CommunityPageReducer