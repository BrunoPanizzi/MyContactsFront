import propTypes from 'prop-types'
import styled, { css } from 'styled-components'

const variants = {
  disabled: css`
    --main-color: #aaa;
    cursor: not-allowed;
  `,
  danger: css`
    --main-color: ${({ theme }) => theme.colors.danger.main};
  `,
  outline: css`
    background: transparent;
    color: var(--main-color);
  `,
}

export const Container = styled.button`
  --main-color: ${({ theme, customColor }) =>
    customColor ?? theme.colors.primary.main};

  ${({ fullWidth }) => fullWidth && 'width: 100%;'}

  min-height: 3rem;
  background: var(--main-color);
  border: 2px solid var(--main-color);
  color: ${({ theme }) => theme.colors.veryLight};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.5em 1.2em;
  font-weight: bold;
  font-size: ${({ fontSize }) => fontSize + 'px'};
  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.06);
  transition: 200ms;

  :hover {
    transform: scale(1.05);
  }
  :active {
    transform: scale(0.95);
  }

  ${({ danger }) => danger && variants.danger}
  ${({ disabled }) => disabled && variants.disabled}
  ${({ outline }) => outline && variants.outline}
`

Container.propTypes = {
  disabled: propTypes.bool,
  danger: propTypes.bool,
  outline: propTypes.bool,
  fullWidth: propTypes.bool,
  customColor: propTypes.string,
  fontSize: propTypes.number,
}
