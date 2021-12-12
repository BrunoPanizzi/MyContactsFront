import PropTypes from 'prop-types'
import { useState } from 'react'

import useToggle from '../../hooks/useToggle'

import arrow from '../../assets/images/arrow.svg'

import { ListOrderButton, ListContainer } from './styles'

import ContactCard from '../ContactCard'
import Loader from '../Loader'

function List({ contacts, loading }) {

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

	return (
		<>
			{loading 
			? <Loader /> 
			: <>
					<ListOrderButton onClick={handleChangeOrder}>
						Nome
						<img 
							style={{transform: `rotate(${arrowRotation}deg)`}}
							src={arrow} 
							alt='arrow' 
							width={18} 
						/>
					</ListOrderButton>
					<ListContainer>
						{contactsComps}
					</ListContainer>
				</>}
			</>
		)
}

List.propTypes = {
	contacts: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired
}

export default List
