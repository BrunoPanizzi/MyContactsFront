import PropTypes from 'prop-types'

import { ListOrderButton } from './styles'

import arrow from '../../assets/images/arrow.svg'
import ContactCard from '../ContactCard'

function List({ contacts }) {

	contacts.sort((a, b) => a.name > b.name ? 1 : -1)

	const contactsComps = contacts.map((contact) => (
		<ContactCard 
			key={contact.id}
			id={contact.id}
			name={contact.name}
			email={contact.email}
			phone={contact.phone}
			category={contact.category}
		/>
	))

	return (
		<>
			<ListOrderButton>
				Nome
				<img src={arrow} alt='arrow' width={18} />
			</ListOrderButton>
			<>
				{contactsComps}
			</>
		</>
	)
}

List.propTypes = {
	contacts: PropTypes.array.isRequired
}

export default List
