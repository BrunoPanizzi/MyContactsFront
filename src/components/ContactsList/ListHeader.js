import { Link } from 'react-router-dom'

import { 
	SearchInput,
	Flex
} from './styles'

function ListHeader() {
	return (
		<>
			<SearchInput placeholder='Procure um contato...' />
			<Flex>
				<span>{18} contatos</span>
				<Link to='/new' >Novo Contato</Link>
			</Flex>
		</>
	)
}

export default ListHeader
