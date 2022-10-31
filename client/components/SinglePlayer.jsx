import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { setSinglePlayer } from "../features/leaderboardSlice";
import { useDispatch, useSelector } from "react-redux";

const SinglePlayer = () => {
	const [doneLoading, setDoneLoading] = useState(false);
	//const [player, setPlayer] = useState([]);
	const player = useSelector((state) => state.leaderboard.singlePlayer);
	const { id } = useParams();
	const dispatch = useDispatch();

	const getPlayer = async () => {
		//const response = await axios.get(`http://localhost:8080/api/players/${id}`);
		const player = await axios.get(`/api/players/${playerId}`);
		//setPlayer(response.data);
		console.log(player.data);
		dispatch(setSinglePlayer(player.data));
		setDoneLoading(true);
		// console.log("these are your players", player);
	};

	useEffect(() => {
		console.log("First useEffect Kicked off for getPlayer");
		getPlayer();
	}, []);

	if (!doneLoading) return <p>Data is loading...</p>;
	else
		return (
			<div>
				<p>{player.username}</p>
				{player.games.map((game) => (
					<li key={game.id}>
						Game {game.id} : {game.result}
					</li>
				))}
			</div>
		);
};

export default SinglePlayer;
