import React, { useState } from "react";

import Text from "../Text";
import Input from "../Input";
import Button from "../Button";
import Loading from "../Loading";

function CreatePage({ action, addPoll }) {
	const [loading, setLoading1] = useState(false);
	return (
		<React.Fragment>
			<Text>
				Result will apear in the link page,
				<br />
				after you take the poll.
			</Text>
			<Input placeHolder="Enter Your question" action={q => action(q)} />
			<Button
				onClick={() => {
					setLoading1(true);
					addPoll(setLoading1);
				}}
			>
				{loading ? <Loading color={"#fff"} /> : "Take the poll"}
			</Button>
		</React.Fragment>
	);
}

export default CreatePage;
