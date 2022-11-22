import { useEffect, useCallback } from 'react'

import ContactService from '../../services/ContactService'

import { useHome } from './homeStore'

import ListHeader from './components/ListHeader'
import List from './components/List'

function Home() {
  const [setError, setContacts, setLoading] = useHome((s) => [
    s.setError,
    s.setContacts,
    s.setLoading,
  ])

  const load = useCallback(async () => {
    setError(false)
    setLoading(true)
    try {
      const list = await ContactService.listContacts()
      console.log(list)
      setContacts(list)
    } catch (err) {
      console.log(err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [setContacts, setError, setLoading])

  useEffect(() => {
    load()
  }, [load])

  return (
    <>
      <ListHeader />
      <List loadContacts={load} />
    </>
  )
}

export default Home
