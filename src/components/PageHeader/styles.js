import styled from 'styled-components'

export const Container = styled.header`
  a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.main};
    text-decoration: none;
    margin-bottom: .5rem;
    
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