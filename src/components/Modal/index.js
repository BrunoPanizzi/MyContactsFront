import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { Background, Container } from './styles'

import FadeInOut from '../FadeInOut'
import Button from '../Button'

function Modal({
  shouldAppear,
  onClose,
  action,
  title,
  content,
  danger,
  cancelLabel,
  confirmLabel,
}) {
  return ReactDOM.createPortal(
    <FadeInOut shouldAppear={shouldAppear}>
      <Background onClick={onClose}>
        <Container danger={danger} onClick={(e) => e.stopPropagation()}>
          <h2>{title}</h2>
          <p>{content}</p>

          <div class="buttons">
            <Button onClick={onClose} outline customColor="#555">
              {cancelLabel}
            </Button>
            <Button onClick={action} danger={danger}>
              {confirmLabel}
            </Button>
          </div>
        </Container>
      </Background>
    </FadeInOut>,
    document.getElementById('modal-root')
  )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  shouldAppear: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  danger: PropTypes.bool,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
}
Modal.defaultProps = {
  danger: false,
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
}

export default Modal
