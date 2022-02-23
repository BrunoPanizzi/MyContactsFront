import styled from 'styled-components'

export const Container = styled.div`
	max-width: 400px;
	text-align: center;

	img {
		width: 30%;
	}

	p {
		color: ${({ theme }) => theme.text.light};
		margin-top: 1rem;
		font-size: 1rem;
		line-height: 20px;
		letter-spacing: 0em;
		font-weight: normal;
	}

	strong {
		font-weight: bold;
		color: ${({ theme }) => theme.colors.primary.main}
	}
`