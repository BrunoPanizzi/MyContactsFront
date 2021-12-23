import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: ${({ theme }) => theme.colors.danger.main};
    margin-bottom: 1rem
  }

  button {
    max-width: 15rem
  }
`