import styled from 'styled-components'

export default styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.veryLight};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1rem 0;
  font-weight: bold;
  font-size: 1.2rem;
`