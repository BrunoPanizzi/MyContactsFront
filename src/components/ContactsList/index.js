import { useEffect, useCallback } from 'react'

import ContactService from '../../services/ContactService'

import { useContacts } from './contactsStore'

import { ListContainer } from './styles'

import ListHeader from './ListHeader'
import List from './List'

function ContactsList() {
  const [setError, setContacts, setLoading] = useContacts((s) => [
    s.setError,
    s.setContacts,
    s.setLoading,
  ])

  const load = useCallback(async () => {
    setError(false)
    setLoading(true)
    try {
      const list = await ContactService.listContacts()
      setContacts(list)
    } catch (err) {
      console.log(err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  return (
    <>
      <ListHeader />
      <ListContainer>
        <List loadContacts={load} />
      </ListContainer>
    </>
  )
}

export default ContactsList
