import styled from 'styled-components'

export default styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.veryLight};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1rem 0;
  font-weight: bold;
  font-size: 1.2rem;
	box-shadow: 0 .2rem .6rem rgba(0,0,0, 0.06);
  transition: 200ms;

  :hover {
    background: ${({ theme }) => theme.colors.primary[500]};
  }
  :active {
    background: ${({ theme }) => theme.colors.primary[700]};
  }

  &[disabled] {
    background: #aaa;
    cursor: not-allowed
  }
`