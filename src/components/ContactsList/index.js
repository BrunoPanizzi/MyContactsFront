import { useEffect, useState, useMemo, useCallback } from 'react'

import ContactService from '../../services/ContactService'

import { ListContainer } from './styles'

import ListHeader from './ListHeader'
import List from './List'

function ContactsList() {
	const [contacts, setContacts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [search, setSearch] = useState('')

	const filteredContacts = useMemo(() => contacts.filter(contact => (
		contact.name.toLowerCase().includes(search.toLowerCase())
	)), [contacts, search])
	
	const load = useCallback(async function load () {
		setError(false)
		setLoading(true)
		try {
			const list = await ContactService.listContacts()
			setContacts(list)
		} catch (err) {
			setError(true)
		} finally {
			setLoading(false)
		}
	}, [])
 
	useEffect(() => {
		load()
	}, [])
	
	return (
		<>
			<ListHeader 
				contactsCount={filteredContacts.length} 
				search={search} 
				setSearch={setSearch}
				searchVisible={!!contacts.length}
			/>
			<ListContainer>
				<List
					contacts={filteredContacts}
					loading={loading}
					error={error}
					loadContacts={load}
					hasContacts={!!contacts.length}
					search={search}
				/>
			</ListContainer>
		</>
	)
}

export default ContactsList
