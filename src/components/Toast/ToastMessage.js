import propTypes from 'prop-types'

import close from '../../assets/images/close.svg'

import { Message } from './styles'
import { useToast } from './toastStore'

export default function ToastMessage({ text, type, id, duration }) {
  const removeToast = useToast((store) => store.removeToast)

  return (
    <Message type={type} duration={duration}>
      <strong>{text}</strong>
      <button className="remove" onClick={() => removeToast(id)}>
        <img src={close} />
      </button>
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
