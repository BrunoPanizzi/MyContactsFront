import PropTypes from 'prop-types'

import { Background, Container } from './styles'

import FadeInOut from '../FadeInOut'
import Button from '../Button'
import Portal from '../Portal'

export default function Modal({
  shouldAppear,
  onClose,
  action,
  title,
  content,
  danger,
  cancelLabel,
  confirmLabel,
}) {
  return (
    <Portal containerId="modal-root">
      <FadeInOut shouldAppear={shouldAppear}>
        <Background onClick={onClose}>
          <Container danger={danger} onClick={(e) => e.stopPropagation()}>
            <h2>{title}</h2>
            <p>{content}</p>

            <div className="buttons">
              <Button onClick={onClose} outline customColor="#555">
                {cancelLabel}
              </Button>
              <Button onClick={action} danger={danger}>
                {confirmLabel}
              </Button>
            </div>
          </Container>
        </Background>
      </FadeInOut>
    </Portal>
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
