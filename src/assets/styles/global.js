import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: ${({ theme }) => theme.text.mainFont};
		-webkit-tap-highlight-color: transparent;
	}

	body {
		color: ${({ theme }) => theme.text.main};
		background: ${({ theme }) => theme.colors.background};
	}

	button, a {
		cursor: pointer;
		border: none;
		background-color: ${({ theme }) => theme.colors.background};
	}
`