import PropTypes from 'prop-types'
import { useState } from 'react'

import useToggle from '../../hooks/useToggle'

import arrow from '../../assets/images/arrow.svg'

import { ListOrderButton } from './styles'

import ContactCard from '../ContactCard'
import ErrorMessage from '../ErrorMessage'
import Loader from '../Loader'
import NoContactsMessage from '../NoContactsMessage'
import NoContactsFound from '../NoContactsFound'


function List({ contacts, loading, error, loadContacts, search }) {
	const [order, toggleOrder] = useToggle('ascending', 'descending')
	const [arrowRotation, setArrowRotation] = useState(0)
	
	contacts.sort((a, b) => {
		if (order === 'ascending') {
			return a.name > b.name ? 1 : -1
		}
		return a.name < b.name ? 1 : -1
	})

	const handleChangeOrder = () => {
		toggleOrder()
		setArrowRotation(prevRotation => prevRotation + 180)
	}
	
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

	if (loading) {
		return <Loader />

	} else if (error) {
		return <ErrorMessage loadContacts={loadContacts} />

	} else if (contacts.length < 1) {
		if (!search) {
			return <NoContactsMessage />
		}
		return <NoContactsFound search={search} />
	}	
	
	return (
		<>
			<ListOrderButton onClick={handleChangeOrder}>
				Nome
				<img
					style={{transform: `rotate(${arrowRotation}deg)`}}
					src={arrow} 
					alt='arrow' 
					width={18} 
				/>
			</ListOrderButton>
				{contactsComps}
		</>
	)
}

List.propTypes = {
	contacts: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.bool.isRequired,
	loadContacts: PropTypes.func.isRequired,
	search: PropTypes.string.isRequired,
}

export default List
