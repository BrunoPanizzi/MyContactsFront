import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import useToggle from '../../hooks/useToggle'

import arrow from '../../assets/images/arrow.svg'

import { ListOrderButton, ListContainer, ErrorContainer } from './styles'

import ContactCard from '../ContactCard'
import Loader from '../Loader'
import Button from '../Button'


function List({ contacts, loading, error, loadContacts }) {
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
		return (
			<ErrorContainer>
				<h2>Algo deu errado</h2>
				<Button onClick={loadContacts}>Tentar novamente</Button>
			</ErrorContainer>
		)
	} else if (!error && contacts.length === 0) {
		return (
			<>
				<h2>Você não tem nenhum contato cadastrado</h2>
				<Link to='/new'>
					<Button
						style={{width: 'fit-content', marginTop: '1rem'}}
					>
						Crie um contato
					</Button>
				</Link>
			</>
		)
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
	loadContacts: PropTypes.func.isRequired
}

export default List
