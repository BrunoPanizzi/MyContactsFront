import { useEffect, useCallback } from 'react'

import ContactService from '../../services/ContactService'

import { useToast } from '../../components/Toast/toastStore'

import { useHome } from './homeStore'

import Modal from '../../components/Modal'
import ListHeader from './components/ListHeader'
import List from './components/List'

function Home() {
  const addToast = useToast((s) => s.addToast)
  const [setError, setContacts, setLoading, modal, setModal] = useHome((s) => [
    s.setError,
    s.setContacts,
    s.setLoading,
    s.modal,
    s.setModal,
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
  }, [setContacts, setError, setLoading])

  const handleDelete = useCallback(
    async (id) => {
      try {
        await ContactService.deleteContact(id)

        addToast('Contato deletado')

        setModal(false)
        load()
      } catch {
        addToast('Não foi possivel remover o contato', 'error')
      }
    },
    [setContacts, setError, setLoading]
  )

  useEffect(() => {
    load()
  }, [load])

  return (
    <>
      <ListHeader />
      <List loadContacts={load} />
      <Modal
        onClose={() => setModal(false)}
        shouldAppear={modal.isVisible}
        action={() => handleDelete(modal.contactId)}
        danger
        title={`Você realmente deseja excluir ${modal.contactName}?`}
        content="Essa ação não pode ser desfeita."
        confirmLabel="Excluir"
      />
    </>
  )
}

export default Home
