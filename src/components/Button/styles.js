import styled from 'styled-components'

export const Container = styled.button`
  min-height: 3rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.veryLight};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.6em 1.2em;
  font-weight: bold;
  font-size: 1.2rem;
  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.06);
  transition: 200ms;

  :hover {
    background: ${({ theme }) => theme.colors.primary[500]};
  }
  :active {
    background: ${({ theme }) => theme.colors.primary[700]};
  }

  &[disabled] {
    background: #aaa;
    cursor: not-allowed;
  }
`