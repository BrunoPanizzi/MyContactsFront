import styled from 'styled-components'

export const Container = styled.header`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	`

export const Title = styled.h1`
	position: relative;
	font-family: ${({ theme }) => theme.text.fancyFont};
	font-weight: 700;
	font-size: 3rem;
	background: linear-gradient(45deg, ${({ theme }) => theme.colors.main}, ${({ theme }) => theme.colors.veryDark});
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
	
	::after {
		position: absolute;
		content: '';
		display: block;
		top: 100%;
		bottom: -6%;
		left: 0;
		right: 100%;
		background: linear-gradient(45deg, ${({ theme }) => theme.colors.main}, ${({ theme }) => theme.colors.veryDark});
		border-radius: 100px;
		transition: 200ms;
	}
	:hover::after {
		right: 0;
		
	}
`

export const Input = styled.input`
	width: 100%;
	height: 2.5rem;
	background: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.text.light};
	border: none;
	outline: none;
	margin-top: 1.2rem;
	padding: 0 .8rem;
	border-radius: ${({ theme }) => theme.bigBorderRadius};
	box-shadow: 0 .2rem 0.8rem rgba(0,0,0,0.1);
	transition: 300ms;

	::placeholder {
		color: ${({ theme }) => theme.text.light};
		transition: 300ms;
	}

	:focus-within, :hover {
		box-shadow: 0 .4rem 1rem rgba(0, 0, 0, 0.15);
		color: ${({ theme }) => theme.text.main};
		::placeholder {
			color: ${({ theme }) => theme.text.main};
		}
	}
`