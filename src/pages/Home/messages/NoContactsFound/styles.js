import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  animation: ${fadeIn} 1.5s forwards;

  p {
    margin-left: 1.5rem;
    color: ${({ theme }) => theme.text.light};
    font-size: 1rem;
    font-weight: normal;
    word-break: break-word;
  }

  strong {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary.main};
  }
`
