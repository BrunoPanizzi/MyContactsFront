import { Link } from 'react-router-dom'

import { useContacts } from './contactsStore'

import { SearchInput, Flex } from './styles'

function ListHeader() {
  const [search, setSearch, contacts, filteredContacts] = useContacts((s) => [
    s.search,
    s.setSearch,
    s.contacts,
    s.filteredContacts,
  ])

  return (
    <>
      {!!contacts.length && (
        <SearchInput
          placeholder="Procure um contato..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      )}
      <Flex>
        <span>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' contato' : ' contatos'}
        </span>
        <Link to="/new">Novo Contato</Link>
      </Flex>
    </>
  )
}

export default ListHeader
