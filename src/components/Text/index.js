import React, { useState, useContext } from "react";
import Styled from "styled-components";

import { themeContext } from "../App";

const Wrapper = Styled.h2`
	font-size:${({ size }) => size || "18px"};
	font-weight:${({ weight }) => weight || 300};
	background: ${({ color }) => color};
	color:${({ color }) => color};
  	-webkit-background-clip: text;
  	-webkit-text-fill-color: transparent;
  	margin:${({ margin }) => margin || "0"};
`;

function Text({ children, color, size, weight, lines, margin, getText }) {
	const [text, setText] = useState("");
	const { state } = useContext(themeContext);
	let boxColor =
		state.background === "#000"
			? "rgba(255, 255, 255, 0.13)"
			: "rgba(0, 0, 0, 0.13)";
	getText = getText || false;
	lines = lines || 1;
	if (getText) {
		async function d() {
			return await getText(setText);
		}
		d();
	}
	return (
		<Wrapper
			color={color || state.color}
			size={size}
			weight={weight}
			margin={margin}
		>
			{!getText && children}
			{getText && text === "" && (
				<svg width="205px" height={lines > 1 ? "75px" : "18px"}>
					<rect
						fill={boxColor}
						x="0"
						y="0"
						width={"205px"}
						height={lines <= 1 ? "18px" : "13px"}
					/>
					{lines > 1 && (
						<React.Fragment>
							<rect
								fill={boxColor}
								x="0"
								y="26"
								width="205px"
								height="13px"
							/>
							<rect
								fill={boxColor}
								x="0"
								y="52"
								width="100px"
								height="13px"
							/>
						</React.Fragment>
					)}
				</svg>
			)}
			{getText && text !== "" && text}
		</Wrapper>
	);
}

export default Text;
