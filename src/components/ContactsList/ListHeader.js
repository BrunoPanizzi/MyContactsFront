import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { SearchInput, Flex } from './styles'

function ListHeader({ contactsCount, search, setSearch }) {
	return (
		<>
			<SearchInput 
				placeholder='Procure um contato...' 
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
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
	contactsCount: PropTypes.number.isRequired,
	search: PropTypes.string.isRequired,
	setSearch: PropTypes.func.isRequired
}

export default ListHeader
