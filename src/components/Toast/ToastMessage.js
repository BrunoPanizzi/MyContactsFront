import propTypes from 'prop-types'

import { Message } from './styles'
import { useToast } from './toastStore'

export default function ToastMessage({ text, type, id, duration }) {
  const removeToast = useToast((store) => store.removeToast)

  return (
    <Message
      type={type}
      duration={duration}
      tabIndex={0}
      role="button"
      onClick={() => removeToast(id)}
    >
      <strong>{text}</strong>
      <div className="time-bar" />
    </Message>
  )
}

ToastMessage.propTypes = {
  text: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  type: propTypes.oneOf(['default', 'success', 'error']),
}

ToastMessage.defaultProps = {
  type: 'default',
}
