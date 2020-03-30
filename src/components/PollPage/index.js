import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Text from "../Text";
import Input from "../Input";
import Button from "../Button";
import Choices from "../Choices";
import Loading from "../Loading";

function PollPage({ action, getId, Firebase }) {
	const id = getId().id;
	const [idVerificationStatus, setStatus] = useState("pending");
	const [voted, setVoted] = useState(
		localStorage.getItem(`poll-${id}`) === "1" || false
	);
	const [canVote, setCanVote] = useState(false);
	const getResult = async function(setText) {
		//firebase Stuff
		return await Firebase.giveMeThePollWithId(id, setText, "result");
	};
	const getQuestion = async function(setText, setCanVote) {
		//firebase Stuff
		return await Firebase.giveMeThePollWithId(
			id,
			setText,
			setCanVote,
			"question"
		);
	};

	useEffect(() => {
		async function checkId() {
			await Firebase.checkId(id, setStatus);
		}
		checkId();
		// eslint-disable-next-line
	}, []);

	switch (idVerificationStatus) {
		case "pending": {
			return <Loading />;
		}
		case "notVerified": {
			return (
				<React.Fragment>
					<Text>Invalid Id Or Link</Text>
					<Button Component={Link} to="/">
						Go Back
					</Button>
				</React.Fragment>
			);
		}
		case "verified": {
			return localStorage.getItem(`poll-${id}`) === "1" && voted ? (
				<React.Fragment>
					<Text getText={setText => getQuestion(setText, a => a)} />
					<Text getText={getResult} />
					<Input id="copyBox" value={window.location.href} />
					<Button
						onClick={() => {
							if (navigator.share) {
								navigator
									.share({
										title: "Poll App by Hadi Houssainy",
										text: "Use this link to vote",
										url: window.location.href
									})
									.then(() => console.log("Successful share"))
									.catch(error =>
										console.log("Error sharing", error)
									);
							}
						}}
					>
						Share Link
					</Button>
				</React.Fragment>
			) : (
				<React.Fragment>
					<div
						style={{
							width: "260px",
							height: "85px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center"
						}}
					>
						<Text
							getText={setText =>
								setTimeout(() => {
									getQuestion(setText, setCanVote);
								}, 1000)
							}
							lines={3}
						/>
					</div>
					<Choices
						onClick={a => {
							if (canVote) {
								localStorage.setItem(`poll-${id}`, "1");
								action(a);
								setVoted(true);
							}
						}}
					/>
				</React.Fragment>
			);
		}
		default: {
			return (
				<React.Fragment>
					<Text>Error Occured!</Text>
					<Button
						Component={Link}
						to={`/${window.location.href.split("/").pop()}`}
					>
						Refresh
					</Button>
				</React.Fragment>
			);
		}
	}
}

export default PollPage;
