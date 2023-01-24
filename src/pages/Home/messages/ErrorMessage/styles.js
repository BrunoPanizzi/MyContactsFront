import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  animation: ${fadeIn} 1.5s forwards;

  div {
    margin-left: 1.5rem;

    h2 {
      color: ${({ theme }) => theme.colors.danger.main};
      margin-bottom: 1rem;
    }

    button {
      max-width: 15rem;
    }
  }
`
