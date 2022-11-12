import PropTypes from 'prop-types'

import arrow from '../../../assets/images/arrow.svg'

import { useHome } from '../homeStore'
import { ListOrderButton } from '../styles'
import ContactCard from './ContactCard'

import Loader from '../../../components/Loader'

import { ErrorMessage, NoContactsFound, NoContactsMessage } from '../messages'

function List({ loadContacts }) {
  const { loading, error, filteredContacts, search, order, setOrder } =
    useHome()

  const handleChangeOrder = () => {
    setOrder(order === 'ascending' ? 'descending' : 'ascending')
  }

  // error handling
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
        <ContactCard
          key={contact.id}
          {...contact}
          loadContacts={loadContacts}
        />
      ))}
    </>
  )
}

List.propTypes = {
  loadContacts: PropTypes.func.isRequired,
}

export default List
