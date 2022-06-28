import propTypes from 'prop-types'

import { Message } from './styles'

export default function ToastMessage({ text, type }) {
  return <Message type={type}>{text}</Message>
}

ToastMessage.propTypes = {
  text: propTypes.string.isRequired,
  type: propTypes.oneOf(['default', 'success', 'error']),
}

ToastMessage.defaultProps = {
  type: 'default',
}
