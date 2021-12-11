import PropTypes from 'prop-types'
import { useState } from 'react'

import arrow from '../../assets/images/arrow.svg'
import ContactCard from '../ContactCard'

import { ListOrderButton } from './styles'

import Loader from '../Loader'

function List({ contacts, loading }) {

	const [order, setOrder] = useState('ascending')
	const [arrowRotation, setArrowRotation] = useState(0)
	
	contacts.sort((a, b) => {
		if (order === 'ascending') {
			return a.name > b.name ? 1 : -1
		}
		return a.name < b.name ? 1 : -1
	})

	const handleChangeOrder = () => {
		setOrder(prevOrder => (
			prevOrder === 'ascending' ? 'descending' : 'ascending'
		))
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
					<ListOrderButton 
						onClick={handleChangeOrder}
					>
						Nome
						<img 
							style={{transform: `rotate(${arrowRotation}deg)`}}
							src={arrow} 
							alt='arrow' 
							width={18} 
						/>
					</ListOrderButton>
					{contactsComps}
				</>}
			</>
		)
}

List.propTypes = {
	contacts: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired
}

export default List
