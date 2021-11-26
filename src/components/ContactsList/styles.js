import styled from 'styled-components'

export const SearchInput = styled.input`
	width: 100%;
	height: 2.5rem;
	margin-bottom: 1.5rem;
	background: ${({ theme }) => theme.colors.veryLight};
	color: ${({ theme }) => theme.text.light};
	border: none;
	outline: none;
	padding: 0 .8rem;
	border-radius: ${({ theme }) => theme.bigBorderRadius};
	box-shadow: 0 .2rem 0.6rem rgba(0,0,0,0.1);
	transition: 300ms;
	
	::placeholder {
		color: ${({ theme }) => theme.text.light};
	}
	
	:focus-within, :hover {
		box-shadow: 0 .4rem 1rem rgba(0, 0, 0, 0.15);
		color: ${({ theme }) => theme.text.main};
		::placeholder {
			color: ${({ theme }) => theme.text.main};
		}
	}
`

export const Flex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;

	span {
		font-size: 1.2rem;
	}

	a {	
		font-size: 1.1rem;
		background: ${({ theme }) => theme.colors.background};	
		color: ${({ theme }) => theme.colors.main};
		border: 2px solid ${({ theme }) => theme.colors.main};
		border-radius: ${({ theme }) => theme.borderRadius};
		padding: .2em .5em;
		outline: none;
		text-decoration: none;
		transition: 200ms;
	
		:focus-visible, :hover {
			background: ${({ theme }) => theme.colors.main};
			color: ${({ theme }) => theme.colors.background};
			transform: scale(1.05);
		}
	}
`

export const ListOrderButton = styled.button`
	display: flex;
	font-size: 1rem;
	background:	${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.main};
`