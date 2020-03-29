import React, { useState, useContext } from "react";
import Styled from "styled-components";
import { motion } from "framer-motion";

import { themeContext } from "../App";

const StyledInput = Styled(motion.input)`
	background:${({ background }) =>
		background === "#000"
			? "rgba(255, 255, 255, 0.13)"
			: "rgba(0, 0, 0, 0.13)"};
	color:${({ color }) => color};
	border-radius:13px;
	width:260px;
	height:85px;
	overflowY:scroll;
	overflowX:hidden;
	font-size: 18px;
	font-weight:300;
	text-align:center;
	border:0;
	margin:5px;
	outline:none;
`;

function Input({ placeHolder, action, value, id }) {
	const { state } = useContext(themeContext);
	const [inputValue, setValue] = useState("");
	return (
		<div
			style={{
				width: "260px",
				height: "85px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				padding: "5px"
			}}
		>
			<StyledInput
				id={id || "8291398127391"}
				whileTap={{ scale: 0.8 }}
				color={state.color}
				background={state.background}
				value={value || inputValue}
				onClick={
					id === "copyBox"
						? e => {
								e.target.select();
								document.execCommand("copy");
								e.target.value = "Copied !";
						  }
						: null
				}
				onChange={e => {
					if (!value) {
						action(e.target.value);
						setValue(e.target.value);
					}
				}}
				placeholder={placeHolder || "Input"}
				readonly={value && "readonly"}
			/>
		</div>
	);
}

export default Input;
