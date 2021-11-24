import { 
	Flex, 
	ContactsCount, 
	NewContact,
	SearchInput
} from './styles'

function ListHeader() {
	return (
		<>
			<SearchInput placeholder='Procure um contato...' />
			<Flex>
				<ContactsCount>
					{18} contatos
				</ContactsCount>
				<NewContact href='/new'>
					Novo Contato
				</NewContact>
			</Flex>
		</>
	)
}

export default ListHeader
