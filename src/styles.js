import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html {
		font-size: 16px;

	}

	body {
		background-color: var(--lynxWhite);
		font-size: 1rem;
	}

	:root{
		--plasticCarrot:#f85d1d;
		--loveVessel:#f60095;
		--lynxWhite:#f7f7f7;
		--plainWhite:#fff;
		--chromaphobicBlack:#282828;
	}
`;
