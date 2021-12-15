import { useEffect, useState } from 'react'

import ContactService from '../../services/ContactService'

import ListHeader from './ListHeader'
import List from './List'

function ContactsList() {
	const [loading, setLoading] = useState(true)
	const [search, setSearch] = useState('')
	const [contacts, setContacts] = useState([])

	const filteredContacts = contacts.filter(contact => (
		contact.name.toLowerCase().includes(search.toLowerCase())
	))

	useEffect(() => {
		const load = async () => {
			try {

				const list = await ContactService.listContacts()
				setContacts(list)
			} catch (err) {
				console.log(err)
			}
		}
		
		load()
		setLoading(false)

	}, [])
	
	return (
		<>
			<ListHeader contactsCount={filteredContacts.length} search={search} setSearch={setSearch} />
			<List contacts={filteredContacts} loading={loading} />
		</>
	)
}

export default ContactsList
