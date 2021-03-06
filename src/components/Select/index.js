import styled from 'styled-components'

export default styled.select`
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  margin-bottom: 1rem;
  background: ${({ theme }) => theme.colors.veryLight};
  border: 2px solid ${({ theme }) => theme.colors.veryLight};
  outline: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.06);
  transition: 200ms;

  :hover {
    border-color: ${({ theme }) => theme.colors.light};
  }
  :focus {
    border-color: ${({ theme }) => theme.colors.main};
    box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.1);
  }

  &[disabled] {
    background: #eee;
    border-color: #ddd;
    box-shadow: none;
    opacity: 1;
  }
`
