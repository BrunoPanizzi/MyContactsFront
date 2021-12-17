import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { Background, Container } from './styles'
import { useRef } from 'react'

import FadeInOut from '../FadeInOut'

function Modal({ shouldAppear, onClose }) {

	const background = useRef()
	const container = useRef()
	
	const handleOutsideClick = (e) => {
		if (!container.current.contains(e.target)) {
			onClose()
		}
	}

	return ReactDOM.createPortal(
		<FadeInOut shouldAppear={shouldAppear}>
			<Background
				ref={background}
				onClick={handleOutsideClick}
			>
				<Container ref={container} >
					<h2>Você realmente deseja excluir esse contato?</h2>
					<p>Essa ação é irreversível</p>
					<button
						className='cancelar'
						onClick={onClose}
					>
						Cancelar
					</button>
					<button
						className='excluir'
					>
						Excluir
					</button>
				</Container>
			</Background>
		</FadeInOut>,
		document.getElementById('modal-root')
	)
}

Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	shouldAppear: PropTypes.bool.isRequired,
}

export default Modal
