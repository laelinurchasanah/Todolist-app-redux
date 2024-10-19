import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  votes: {}
};

const voteSlice = createSlice({
  name: 'votes',
  initialState,
  reducers: {
    addVote: (state, action) => {
      const { id } = action.payload;
      state.votes[id] = (state.votes[id] || 0) + 1;
    }
  }
});

export const { addVote } = voteSlice.actions;

export const selectVotes = (state) => state.votes.votes;

export default voteSlice.reducer;
