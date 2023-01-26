import styled from 'styled-components'

export const Container = styled.header`
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
`

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.text.fancyFont};
  font-weight: 700;
  font-size: 3rem;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primary[500]},
    ${({ theme }) => theme.colors.primary[800]}
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`

export const Icon = styled.button`
  position: absolute;

  width: 2rem;
  aspect-ratio: 1;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  transition: 0.2s;

  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.colors.primary.main};
  }
`
