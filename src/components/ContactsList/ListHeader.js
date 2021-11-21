import React from 'react'

import { HeaderContainer, ContactsCount, NewContactButton } from './styles'

function ListHeader() {
	return (
		<HeaderContainer>
			<ContactsCount>
				{18} contatos	
			</ContactsCount>
			<NewContactButton>
				Novo Contato
			</NewContactButton>
		</HeaderContainer>
	)
}

export default ListHeader
