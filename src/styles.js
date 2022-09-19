import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-size: 16px;
	}

	body {
		width: 300px;
		height: 600px;
		margin: 0;
		font-size: 1rem;
	}
`;
