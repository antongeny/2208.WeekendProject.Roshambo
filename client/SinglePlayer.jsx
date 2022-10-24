import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SinglePlayer = () => {
	const [player, setPlayer] = useState([]);
	const [doneLoading, setDoneLoading] = useState(false);

	const { id } = useParams();

	const getPlayer = async () => {
		const response = await axios.get(`http://localhost:8080/api/players/${id}`);
		setPlayer(response.data);
		setDoneLoading(true);
		// console.log("these are your players", player);
	};

	useEffect(() => {
		console.log("First useEffect Kicked off for getPlayer");
		getPlayer();
	}, []);

	if (!doneLoading) return <p>loading</p>;
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
