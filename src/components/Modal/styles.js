import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
	from { opacity: 0 }
	to { opacity: 1 }
`

const fadeOut = keyframes`
	from { opacity: 1 }
	to { opacity: 0 }
`

export const Background = styled.div`
	position: absolute;
	inset: 0;
	background: rgba(0,0,0,0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	animation: ${fadeIn} 200ms;
`

export const Container = styled.div`
	width: min(500px, 90%);
	background: ${({ theme }) => theme.colors.veryLight};
	border-radius: ${({ theme }) => theme.borderRadius};
	padding: 2rem;
	box-shadow: 0 0 3rem rgba(0,0,0,0.3);

	h2 {
		color: ${({ theme }) => theme.colors.danger.main};
		margin-bottom: .5em;
	}

	button {
		border-radius: ${({ theme }) => theme.borderRadius};
		font-size: 1rem;
		font-weight: bold;
		margin: 1rem 1rem 0 0 ;
		padding: .4em 1em;
		transition: 200ms;
	}

	.cancelar {
		border: 2px solid ${({ theme }) => theme.colors.veryLight};
		background: ${({ theme }) => theme.colors.veryLight};

		:hover {
			color: ${({ theme }) => theme.colors.danger.main};		
			border-color: ${({ theme }) => theme.colors.danger.main};
		}
	}

	.excluir {
		background: ${({ theme }) => theme.colors.danger.main};		
		color: ${({ theme }) => theme.colors.veryLight};		
		border: 2px solid ${({ theme }) => theme.colors.danger.main};

		:focus-within {
			transform: scale(1.1);
		}
	}
`