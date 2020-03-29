import React, { useContext, Suspense } from "react";
import Styled from "styled-components";

import { themeContext } from "../App";

const CheckIcon = React.lazy(() => import("./CheckIcon"));
const UnCheckIcon = React.lazy(() => import("./UnCheckIcon"));

const Wrapper = Styled.div`
	display:flex;
	background:tranparent;
	justify-content:space-around;
	align-items:center;
	width:90%;
	height:88px;
`;

const Button = Styled.button`
	border:0;
	background:rgba(0, 0, 0, 0);
	outline:none
`;

function Choices({ onClick }) {
	const { state } = useContext(themeContext);
	let boxColor =
		state.background === "#000"
			? "rgba(255, 255, 255, 0.13)"
			: "rgba(0, 0, 0, 0.13)";
	return (
		<Wrapper>
			<Suspense
				fallback={
					<svg width="85px" height="85px">
						<react
							fill={boxColor}
							x="0"
							y="0"
							width="85px"
							height="85px"
						/>
					</svg>
				}
			>
				<Button onClick={() => onClick("y")}>
					<CheckIcon
						firstColor={state.firstColor}
						secondColor={state.secondColor}
					/>
				</Button>
			</Suspense>
			<Suspense
				fallback={
					<svg width="85px" height="85px">
						<react
							fill={boxColor}
							x="0"
							y="0"
							width="85px"
							height="85px"
						/>
					</svg>
				}
			>
				<Button onClick={() => onClick("n")}>
					<UnCheckIcon
						firstColor={state.firstColor}
						secondColor={state.secondColor}
					/>
				</Button>
			</Suspense>
		</Wrapper>
	);
}

export default Choices;
