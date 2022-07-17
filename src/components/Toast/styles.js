import styled, { css, keyframes } from 'styled-components'

const shrink = keyframes`
  from {
    width: 100%;
  }

  to {
    width: 0
  }
`

export const Container = styled.div`
  isolation: isolate;
  z-index: 4;
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
`

const messageVariants = {
  default: css`
    background-color: ${({ theme }) => theme.colors.veryLight};
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
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
  cursor: pointer;

  position: relative; // for the timebar
  overflow: hidden;
  display: grid;
  place-items: center;

  & + & {
    margin-top: 0.5rem;
  }

  .time-bar {
    position: absolute;
    border-radius: 99px;
    width: 100%;
    left: 0;
    top: calc(100% - 4px);
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.primary.main};

    animation: ${shrink} ${({ duration }) => duration + 's'} linear;
  }

  ${({ type }) => messageVariants[type] || messageVariants.default}
`
