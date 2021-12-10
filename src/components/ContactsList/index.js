import { useEffect, useState } from 'react'

import ListHeader from './ListHeader'
import List from './List'

function ContactsList() {

	const [contacts, setContacts] = useState([])

	useEffect(() => {
		fetch('http://localhost:3001/contacts')
			.then(async (response) => {
				setContacts(await response.json())
			})
			.catch((error) => console.log(error))
	}, [])

	return (
		<>
			<ListHeader contactsCount={contacts.length} />
			<List contacts={contacts} />
		</>
	)
}

export default ContactsList
