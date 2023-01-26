import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.veryLight};
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.1);

  transition: background-color 0.4s, color 0.5s;
`

export const Info = styled.div`
  div {
    display: flex;
    align-items: center;

    h2 {
      font-size: 1.3rem;
      font-family: ${({ theme }) => theme.text.fancyFont};
      font-weight: bold;
      margin-bottom: 0.2rem;
      margin-right: 0.4rem;
    }

    span {
      background: ${({ theme }) => theme.colors.primary[200]};
      padding: 0.2rem 0.4rem;
      border-radius: ${({ theme }) => theme.borderRadius};
      font-size: 0.8rem;
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
  p {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.text.light};
  }
`

export const Icons = styled.div`
  display: flex;

  button,
  a {
    display: block;
    margin-left: 0.75rem;
    transition: 200ms;
    :hover {
      transform: scale(1.1);
    }
  }
`
