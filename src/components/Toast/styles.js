import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
`

const messageVariants = {
  default: css`
    background-color: ${({ theme }) => theme.colors.veryLight};
    box-shadow: 0 2px 6px 1px rgba(0 0 0 / 0.2);
  `,
  success: css`
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: white;
  `,
  error: css`
    background-color: ${({ theme }) => theme.colors.danger.main};
    color: white;
  `,
}

export const Message = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1rem 2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

  & + & {
    margin-top: 0.5rem;
  }

  ${({ type }) => messageVariants[type] || messageVariants.default}
`
