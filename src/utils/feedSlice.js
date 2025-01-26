import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: [], // Initialize as an empty array instead of null

  reducers: {
    addFeed: (state, action) => {
      return action.payload || []; // Set to the payload or empty array if invalid
    },
    removeFeed: (state,action) => {
      const newFeed = state.filter((user)=>user._id != action.payload);
      return newFeed
    }
  }
});

export const { addFeed, removeFeed } = feedSlice.actions;
export default feedSlice.reducer;
