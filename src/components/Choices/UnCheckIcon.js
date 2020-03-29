import React from "react";

const UnCheckIcon = ({ firstColor, secondColor }) => (
	<svg width="84.805" height="84.874" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<linearGradient
				id="a"
				x1="392.08"
				x2="476.89"
				y1="391.07"
				y2="305.51"
				gradientTransform="translate(-392.09 -305.5)"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor={firstColor} offset="0%" />
				<stop
					stopColor={secondColor}
					stopOpacity="98.7%"
					offset="70%"
				/>
			</linearGradient>
		</defs>
		<path
			d="M18.458.003C5.108-.265-7.215 17.316 5.028 29.558l7.088 7.086 15.392-15.395a4.108 4.108 0 015.822 0 4.106 4.106 0 010 5.82L18.208 42.193l.002.546-.275-.273-13.77 13.771c-13.852 15.68 10.069 38.865 25.233 23.702l13.006-13.258-.051-.051h.102l-.051.05 13.004 13.26c15.464 15.461 40.04-8.955 24.37-24.624l-12.879-12.88-.303.3-.003-.602.306.303 12.879-12.88c15.67-15.667-8.906-40.086-24.37-24.621L42.404 18.193l.053.05h-.104l.051-.05L29.398 4.935c-3.383-3.384-7.2-4.857-10.94-4.932zm12.526 33.688c.55 0 1.1.21 1.521.63a2.145 2.145 0 010 3.041L17.091 52.778c-.842.843-2.2.843-3.043 0a2.145 2.145 0 010-3.04l15.416-15.417a2.14 2.14 0 011.52-.63z"
			fill="url(#a)"
		/>
	</svg>
);

export default UnCheckIcon;
