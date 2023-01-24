import propTypes from 'prop-types'

import Loader from '../Loader'

import { Container } from './styles'

function Button({
  onClick,
  children,
  disabled,
  isLoading,
  danger,
  outline,
  fullWidth,
  fontSize,
  customColor,
}) {
  return (
    <Container
      disabled={disabled || isLoading}
      {...{
        onClick,
        danger,
        outline,
        fullWidth,
        customColor,
        fontSize,
      }}
    >
      {!isLoading && children}
      {isLoading && <Loader danger={danger} />}
    </Container>
  )
}

Button.propTypes = {
  onClick: propTypes.func,
  children: propTypes.node.isRequired,
  disabled: propTypes.bool,
  isLoading: propTypes.bool,
  danger: propTypes.bool,
  outline: propTypes.bool,
  fullWidth: propTypes.bool,
  fontSize: propTypes.number,
  customColor: propTypes.string,
}

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  isLoading: false,
  danger: false,
  outline: false,
  fontSize: 16,
  fullWidth: false,
}

export default Button
