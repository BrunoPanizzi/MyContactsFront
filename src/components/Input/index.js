import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const Input = styled.input`
  position: relative;
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  color: ${({ theme }) => theme.text.main};
  background: ${({ theme }) => theme.colors.veryLight};
  border: 2px solid ${({ theme }) => theme.colors.veryLight};
  outline: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.06);
  transition: 200ms;

  :focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.1);
  }

  ${({ theme, error }) =>
    error &&
    css`
      // if prop "error" is marked as true
      border-color: ${theme.colors.danger.main} !important;
    `}

  &[disabled] {
    background: #eee;
    border-color: #ddd;
    box-shadow: none;
  }
`

Input.propTypes = {
  error: PropTypes.bool,
}

Input.defaultProps = {
  error: false,
}

export default Input
