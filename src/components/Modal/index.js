import PropTypes from 'prop-types'

import useAnimatedExit from '../../hooks/useAnimatedExit'

import { Background, Container } from './styles'

import Button from '../Button'
import Portal from '../Portal'

export default function Modal({
  shouldAppear,
  onClose,
  action,
  title,
  content,
  danger,
  loading,
  cancelLabel,
  confirmLabel,
}) {
  const [modalRef, { shouldRender }] = useAnimatedExit(shouldAppear)

  if (!shouldRender) {
    return null
  }

  return (
    <Portal containerId="modal-root">
      <Background
        ref={modalRef}
        onClick={onClose}
        className={shouldAppear ? 'fadeIn' : 'fadeOut'}
      >
        <Container danger={danger} onClick={(e) => e.stopPropagation()}>
          <h2>{title}</h2>
          <p>{content}</p>

          <div className="buttons">
            <Button onClick={onClose} outline customColor="#555">
              {cancelLabel}
            </Button>
            <Button onClick={action} danger={danger} isLoading={loading}>
              {confirmLabel}
            </Button>
          </div>
        </Container>
      </Background>
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
  loading: PropTypes.bool,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
}
Modal.defaultProps = {
  danger: false,
  loading: false,
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
}
