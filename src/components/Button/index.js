import propTypes from 'prop-types'

import Loader from '../Loader'

import { Container } from './styles'

function Button({ children, disabled, isLoading }) {
  return (
    <Container disabled={disabled || isLoading}>
      {!isLoading && children}
      {isLoading && <Loader />}
    </Container>
  )
}

Button.propTypes = {
  children: propTypes.node.isRequired,
  disabled: propTypes.bool,
  isLoading: propTypes.bool,
}

Button.defaultProps = {
  disabled: false,
  isLoading: false,
}

export default Button
