import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`

export const Container = styled.div`
  text-align: center;
  animation: ${fadeIn} 1.5s forwards;

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
    color: ${({ theme }) => theme.colors.primary.main};
  }
`
