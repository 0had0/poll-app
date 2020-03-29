import React, { useContext } from "react";
import Styled from "styled-components";
import { motion } from "framer-motion";

import { themeContext } from "../App";

const StyledButton = Styled(motion.button)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 260px;
	height: 85px;
	background: ${({ gradien }) => gradien || "blue"};
	color: white;
	border-radius: 13px;
	border: 0;
	font-size:24px;
	margin:5px

`;

function Button(props) {
	const { state } = useContext(themeContext);
	let Component =
		props.Component ||
		function({ children }) {
			return <React.Fragment>{children}</React.Fragment>;
		};
	return (
		<Component
			style={{ textDecoration: "none", fontWeight: "500" }}
			{...props}
		>
			<StyledButton
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				gradien={state.gradien}
				disabled={props.disabled || false}
				onClick={props.onClick || null}
			>
				{props.children}
			</StyledButton>
		</Component>
	);
}

export default Button;
