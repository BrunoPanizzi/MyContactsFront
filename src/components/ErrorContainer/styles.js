import styled, { css } from 'styled-components'

export const Container = styled.div`
	position: relative;
  margin-bottom: 1rem;
	transition: 200ms;

	${({ error }) => error && css`
		margin-bottom: 1.8rem
	`}
`

export const ErrorMessage = styled.div`
	transition: 200ms;
	position: absolute;
	z-index: -1;
	font-size: .8rem;
	color: ${({ theme }) => theme.colors.danger.main};
	opacity: 0;
	transform: translateY(-100%);

	${({ error }) => error && css`
		transform: translateY(0);
		opacity: 1
	`}
`