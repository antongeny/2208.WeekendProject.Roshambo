import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const leaderboardSlice = createSlice({
	name: "leaderboard",
	initialState,
	reducers: {
		setLeaderboard: (state, action) => {
			state.playerLeaderboard = action.payload;
		},
		setSinglePlayer: (state, action) => {
			state.setSinglePlayer = action.payload;
		},
		// similar to above with addPlayer:
		//addPlayer
	},
});

export const { setLeaderboard, setSinglePlayer } = leaderboardSlice.actions;

export default leaderboardSlice.reducer;
