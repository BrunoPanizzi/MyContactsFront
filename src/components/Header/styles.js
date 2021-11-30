import styled from 'styled-components'

export const Container = styled.header`
	text-align: center;
	margin-bottom: 2rem;
`

export const Title = styled.h1`
	font-family: ${({ theme }) => theme.text.fancyFont};
	font-weight: 700;
	font-size: 3rem;
	background: linear-gradient(45deg, ${({ theme }) => theme.colors.primary.main}, ${({ theme }) => theme.colors.primary[900]});
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;	
`