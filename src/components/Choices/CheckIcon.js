import React from "react";

const CheckIcon = ({ firstColor, secondColor }) => (
	<svg width="112.21" height="80.596" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<linearGradient
				id="a"
				x1="495.35"
				x2="606.56"
				y1="393.52"
				y2="313.52"
				gradientTransform="translate(-494.68 -311.05)"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor={firstColor} offset="0%" />
				<stop stopColor={secondColor} stopOpacity="92%" offset="70%" />
			</linearGradient>
		</defs>
		<path
			d="M94.423 2.178c-3.738.075-7.557 1.549-10.939 4.931L50.478 40.367l-.152.149-7.25-7.158L30.07 20.1C14.606 4.636-9.968 29.052 5.7 44.72l12.278 12.278 13.61-13.611a4.76 4.76 0 016.747 0 4.76 4.76 0 010 6.746l-13.611 13.61L35.769 74.79c5.7 7.855 17.268 11.76 26.074 2.955l12.879-12.881 33.133-33.131c12.242-12.242-.082-29.823-13.432-29.555zM51.646 44.086c.617 0 1.232.236 1.705.709a2.407 2.407 0 010 3.412L36.474 65.084a2.407 2.407 0 01-3.412 0 2.407 2.407 0 010-3.412l16.877-16.877a2.407 2.407 0 011.707-.71z"
			fill="url(#a)"
			transform="translate(-.673 -2.175)"
		/>
	</svg>
);

export default CheckIcon;
