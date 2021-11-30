import styled from 'styled-components'

export const Container = styled.header`
  margin-bottom: 1.5rem;
  a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    margin-bottom: .5rem;
    outline: none;

    img {
      width: 1.5rem;
      transform: rotate(270deg);
      margin-right: .3rem
    }
  }

  strong {
    font-size: 1.2rem;
  }
`