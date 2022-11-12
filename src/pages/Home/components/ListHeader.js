import { Link } from 'react-router-dom'

import { useHome } from '../homeStore'

import { SearchInput, Flex } from '../styles'

function ListHeader() {
  const [search, setSearch, amountOfContacts, amountOfFilteredContacts] =
    useHome((s) => [
      s.search,
      s.setSearch,
      s.contacts.length,
      s.filteredContacts.length,
    ])

  return (
    <>
      {amountOfContacts > 0 && (
        <SearchInput
          placeholder="Procure um contato..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      )}
      <Flex>
        <span>
          {amountOfFilteredContacts}
          {amountOfFilteredContacts === 1 ? ' contato' : ' contatos'}
        </span>
        <Link to="/new">Novo Contato</Link>
      </Flex>
    </>
  )
}

export default ListHeader
