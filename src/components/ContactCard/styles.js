import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.veryLight};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	border-radius: ${({ theme }) => theme.borderRadius};
	margin-top: 1rem;
	padding: .6rem 1.2rem;
	box-shadow: 0 .2rem .8rem rgba(0,0,0, 0.1);
`

export const Info = styled.div`
	div {
		display: flex;
		align-items: center;

		h2 {
			font-size: 1.3rem;
			font-family: ${({ theme }) => theme.text.fancyFont};
			font-weight: bold;
			margin-bottom: .2rem;
			margin-right: .4rem;
		}

		span {
			background: ${({ theme }) => theme.colors.light};
			padding: .2rem .4rem;
			border-radius: ${({ theme }) => theme.borderRadius};
			font-size: .8rem;
			color: ${({ theme }) => theme.colors.main}
		}
	}
	p {
		font-size: .8rem;
		color: ${({ theme }) => theme.text.light}
	}
`

export const Icons = styled.div`
	display: flex;
	
	button, a {
		background: ${({ theme }) => theme.colors.veryLight};
		display: block;
		margin-left: .75rem;
		transition: 200ms;
		:hover {
			transform: scale(1.1)
		}
	}
`