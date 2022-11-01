import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	allPlayers: [],
	singlePlayer: [],
};

export const leaderboardSlice = createSlice({
	name: "leaderboard",
	initialState,
	reducers: {
		setLeaderboard: (state, action) => {
			state.allPlayers = action.payload;
		},
		setSinglePlayer: (state, action) => {
			state.singlePlayer = action.payload;
		},
		// similar to above with addPlayer:
		//addPlayer
	},
});

export const { setLeaderboard, setSinglePlayer } = leaderboardSlice.actions;

export default leaderboardSlice.reducer;
