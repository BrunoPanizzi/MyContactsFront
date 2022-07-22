import styled from 'styled-components'

export const Background = styled.div`
  position: fixed;
  backdrop-filter: blur(4px);
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  width: min(500px, 90%);
  background: ${({ theme }) => theme.colors.veryLight};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2rem;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.3);

  h2 {
    color: ${({ theme }) => theme.colors.danger.main};
    margin-bottom: 0.5em;
  }

  .buttons {
    margin-top: 2rem;
    display: flex;
    gap: 0.5rem;
    justify-content: end;
  }
`
