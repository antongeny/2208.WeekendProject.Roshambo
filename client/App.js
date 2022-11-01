import React, { useEffect, useState } from "react";
import axios from "axios";
import AllPlayers from "./components/AllPlayers.jsx";
import { Link, Route, Routes } from "react-router-dom";
import SinglePlayer from "./components/SinglePlayer.jsx";
import { useSelector, useDispatch } from "react-redux";
import { setLeaderboard } from "./features/leaderboardSlice.js";

const App = () => {
	//const [players, setPlayers] = useState([]);
	const dispatch = useDispatch();
	const players = useSelector((state) => state.leaderboard.allPlayers);
	const getPlayers = async () => {
		const response = await axios.get("http://localhost:8080/api/players");
		dispatch(setLeaderboard(response.data));
	};

	useEffect(() => {
		console.log("First useEffect Kicked off");
		getPlayers();
	}, []);

	return (
		<div className="row container">
			<h1 className="header">Roshambo</h1>
			{/* The game starts here! */}

			<div className="buttons">
				<div>
					<Link to="/">
						<button>Home</button>
					</Link>
					<Link to="/leaderboard">
						<button>Leaderboard</button>
					</Link>
					<Link to="/play">
						<button>Play</button>
					</Link>
					{/* <Link to="/test">
						<button>TEST</button>
					</Link> */}
				</div>
			</div>
			<Routes>
				<Route exact path="/leaderboard" element={<AllPlayers players={players} />} />
				<Route exact path="/leaderboard/:id" element={<SinglePlayer />} />
				{/* <Route exact path="/test" element={<Test />} /> */}
				<Route path="/" element={<p></p>} />
				<Route path="/*" element={<p></p>} />
			</Routes>
		</div>
	);
};

export default App;
