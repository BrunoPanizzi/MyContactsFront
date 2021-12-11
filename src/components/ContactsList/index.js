import { useEffect, useState } from 'react'

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
		fetch('http://192.168.0.108:3001/contacts')
			.then(async (response) => {
				setContacts(await response.json())
			})
			.catch((error) => console.log(error))
			.finally(() => setLoading(false))
		}, [])
	
	return (
		<>
			<ListHeader contactsCount={filteredContacts.length} search={search} setSearch={setSearch} />
			<List contacts={filteredContacts} loading={loading} />
		</>
	)
}

export default ContactsList
