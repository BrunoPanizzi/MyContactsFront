import styled from 'styled-components'

export const Container = styled.div`
	margin-top: 2rem;
`

export const HeaderContainer = styled.header`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
`

export const ContactsCount = styled.span`
	font-size: 1.2rem;
`

export const NewContactButton = styled.button`
	font-size: 1.2rem;
	background: ${({ theme }) => theme.colors.background};	
	color: ${({ theme }) => theme.colors.main};
	border: 2px solid ${({ theme }) => theme.colors.main};
	border-radius: ${({ theme }) => theme.borderRadius};
	padding: .2em .5em;
	outline: none;
	transition: 200ms;

	:focus-visible, :hover {
		background: ${({ theme }) => theme.colors.main};
		color: ${({ theme }) => theme.colors.background};
		transform: scale(1.05);
	}
`

export const ListOrderButton = styled.button`
	display: flex;
	font-size: 1rem;
	background:	${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.main};
`