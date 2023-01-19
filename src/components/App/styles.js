import styled from 'styled-components'

export const Container = styled.main`
  width: min(500px, 90%);
  margin: min(3rem, 10%) auto;
  border-radius: ${({ theme }) => theme.borderRadius};
`
