import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import formatPhone from '../../utils/formatPhone'
import useToggle from '../../hooks/useToggle'

import { Container, Info, Icons } from './styles'

import edit from '../../assets/images/edit.svg'
import trash from '../../assets/images/trash.svg'

import Modal from '../Modal'

function ContactCard({ id, name, email, phone, category }) {

	const [modal, toggleModal] = useToggle(false, true)

	return (
		<Container>
			<Modal 
				onClose={toggleModal}
				shouldAppear={modal} 
			/>
			<Info>
				<div>
					<h2>{name}</h2>
					{category && <span>{category}</span>}
				</div>
				{phone && <p>{formatPhone(phone.toString())}</p>}
				<p>{email}</p>
			</Info>

			<Icons>
		
				<Link to='/edit/placeholder'>
					<img src={edit} alt='trash icon' />
				</Link>
			
				<button onClick={toggleModal}>
					<img src={trash} alt='trash icon' />
				</button>
		
			</Icons>
		
		</Container>
	)
}

ContactCard.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	phone: PropTypes.oneOfType([ PropTypes.string, PropTypes.number]),
	category: PropTypes.string
}

export default ContactCard
