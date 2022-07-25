import PropTypes from 'prop-types'
import { useState } from 'react'

import useToggle from '../../hooks/useToggle'

import arrow from '../../assets/images/arrow.svg'

import { useContacts } from './contactsStore'

import { ListOrderButton } from './styles'

import ContactCard from '../ContactCard'
import ErrorMessage from '../ErrorMessage'
import Loader from '../Loader'
import NoContactsMessage from '../NoContactsMessage'
import NoContactsFound from '../NoContactsFound'

function List({ loadContacts }) {
  const { loading, error, filteredContacts, contacts, search, setContacts } =
    useContacts()

  const [order, toggleOrder] = useToggle('ascending', 'descending')
  const [arrowRotation, setArrowRotation] = useState(0)

  const handleChangeOrder = () => {
    toggleOrder()
    setContacts(
      contacts.sort((a, b) => {
        if (order === 'ascending') {
          return a.name < b.name ? 1 : -1
        }
        return a.name > b.name ? 1 : -1
      })
    )
    setArrowRotation((prevRotation) => prevRotation + 180)
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
          style={{ transform: `rotate(${arrowRotation}deg)` }}
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
