import React, { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../Input";
import Button from "../Button";

function HomePage() {
	const [id, setId] = useState("");

	const checkInput = input => {
		const re = /http:\/\/0had0\.github\.io\/poll-app\//g; //id
		if (re.exec(input) !== null) {
			return input.split("http://0had0.github.io/poll-app/").pop();
		} else return input;
	};
	return (
		<React.Fragment>
			<Input placeHolder="Enter link or ID" action={n => setId(n)} />
			<Button
				disabled={checkInput(id) === ""}
				Component={Link}
				to={`/poll-app/${id}`}
			>
				Enter Poll
			</Button>
			<Button Component={Link} to="/poll-app/create">
				Create Poll
			</Button>
		</React.Fragment>
	);
}

export default HomePage;
