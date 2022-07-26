import PropTypes from 'prop-types'

import arrow from '../../assets/images/arrow.svg'

import { useContacts } from './contactsStore'

import { ListOrderButton } from './styles'

import ContactCard from '../ContactCard'
import ErrorMessage from '../ErrorMessage'
import Loader from '../Loader'
import NoContactsMessage from '../NoContactsMessage'
import NoContactsFound from '../NoContactsFound'

function List({ loadContacts }) {
  const { loading, error, filteredContacts, search, order, setOrder } =
    useContacts()

  const handleChangeOrder = () => {
    setOrder(order === 'ascending' ? 'descending' : 'ascending')
  }

  if (loading) {
    return <Loader />
  } else if (error) {
    return <ErrorMessage loadContacts={loadContacts} />
  } else if (filteredContacts.length < 1) {
    if (!search) {
      return <NoContactsMessage />
    }
    return <NoContactsFound search={search} />
  }

  return (
    <>
      <ListOrderButton onClick={handleChangeOrder}>
        Nome
        <img
          style={{
            transform: `rotate(${order === 'ascending' ? 0 : 180}deg)`,
          }}
          src={arrow}
          alt="arrow"
          width={18}
        />
      </ListOrderButton>
      {filteredContacts.map((contact) => (
        <ContactCard key={contact.id} {...contact} />
      ))}
    </>
  )
}

List.propTypes = {
  loadContacts: PropTypes.func.isRequired,
}

export default List
