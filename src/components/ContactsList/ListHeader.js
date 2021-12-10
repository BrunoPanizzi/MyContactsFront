import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { SearchInput, Flex } from './styles'

function ListHeader({ contactsCount }) {
	return (
		<>
			<SearchInput placeholder='Procure um contato...' />
			<Flex>
				<span>
					{contactsCount} 
					{contactsCount === 1 ? ' contato' : ' contatos'}
				</span>
				<Link to='/new' >Novo Contato</Link>
			</Flex>
		</>
	)
}

ListHeader.propTypes = {
	contactsCount: PropTypes.number.isRequired
}

export default ListHeader
