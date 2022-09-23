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
		background-color: var(--plainWhite);
		font-size: 1rem;
	}

	:root{
		--plasticCarrot:#f85d1d;
		--loveVessel:#f60095;
		--plainWhite:#fff;
		--chromaphobicBlack:#282828;
	}
`;
