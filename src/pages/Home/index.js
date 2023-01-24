import { useEffect, useCallback } from 'react'
import { toast } from 'react-hot-toast'

import ContactService from '../../services/ContactService'

import { useHome } from './homeStore'

import Modal from '../../components/Modal'
import ListHeader from './components/ListHeader'
import List from './components/List'

function Home() {
  const [setError, setContacts, setLoading, modal, setModal, setModalLoading] =
    useHome((s) => [
      s.setError,
      s.setContacts,
      s.setLoading,
      s.modal,
      s.setModal,
      s.setModalLoading,
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
        setModalLoading(true)
        await ContactService.deleteContact(id)

        toast.success('Contato deletado')

        setModal(false)
        load()
      } catch {
        toast.error('Não foi possivel remover o contato')
      } finally {
        setModalLoading(false)
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
        loading={modal.loading}
      />
    </>
  )
}

export default Home
