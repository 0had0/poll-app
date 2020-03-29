import React, { useContext } from "react";
import Styled from "styled-components";

import { themeContext } from "../App";

import "./Loading.css";

const Line = Styled.div`
	display: inline-block;
	width: 15px;
	height: 15px;
	border-radius: 15px;
	background-color: ${({ color }) => color};
`;

function Loading({ color }) {
	const { state } = useContext(themeContext);
	color = color || state.firstColor;
	return (
		<React.Fragment>
			<div className="load">
				<Line className="line" color={color} />
				<Line className="line" color={color} />
				<Line className="line" color={color} />
			</div>
		</React.Fragment>
	);
}

export default Loading;
