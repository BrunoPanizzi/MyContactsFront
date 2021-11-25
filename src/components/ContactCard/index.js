import { Link } from 'react-router-dom'

import edit from '../../assets/images/edit.svg'
import trash from '../../assets/images/trash.svg'

import { Container, Info, Icons } from './styles'

function ContactCard() {
	return (
		<Container>
			<Info>
				<div>
					<h2> Roberto </h2>
					<span>Categoria</span>
				</div>
				<p>  51-99999-9999 </p>
				<p>  roberto.gmail.com </p>
			</Info>
			<Icons>
				<Link to='/edit/placeholder'>
					<img src={edit} alt='trash icon' />
				</Link>
				<button onClick={() => alert('dlete')}>
					<img src={trash} alt='trash icon' />
				</button>
			</Icons>
		</Container>
	)
}

export default ContactCard
