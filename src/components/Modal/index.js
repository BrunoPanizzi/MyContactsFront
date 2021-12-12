import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { Background, Container } from './styles'
import { useRef } from 'react'

function Modal({ onClose }) {

	const background = useRef()
	const container = useRef()
	
	const handleOutsideClick = (e) => {
		if (!container.current.contains(e.target)) {
			onClose()
		}
	}


	return ReactDOM.createPortal(
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
		</Background>,
		document.getElementById('modal-root')
	)
}

Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
}

export default Modal
