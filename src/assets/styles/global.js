import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: ${({ theme }) => theme.text.mainFont}, sans-serif;
		-webkit-tap-highlight-color: transparent;
	}

	body {
		color: ${({ theme }) => theme.text.main};
		background-color: ${({ theme }) => theme.colors.background};
    transition:color 0.6s, background-color 0.5s ;
	}

	button, a {
		cursor: pointer;
		border: none;
    background-color: transparent;
	}
`
