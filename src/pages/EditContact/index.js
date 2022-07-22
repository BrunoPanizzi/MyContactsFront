import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import ContactService from '../../services/ContactService'

import { useToast } from '../../components/Toast/toastStore'

import ContactForm from '../../components/ContactForm'
import Loader from '../../components/Loader'
import PageHeader from '../../components/PageHeader'

function EditContact() {
  const toast = useToast((state) => state.addToast)

  const [isLoading, setIsLoading] = useState(true)
  const [contact, setContact] = useState()

  const { id } = useParams()
  const history = useHistory()

  const handleSubmit = async (formData) => {
    try {
      const response = await ContactService.editContact(id, formData)

      setContact(response)

      toast('Contato editado')
    } catch (e) {
      console.log(e)
      toast('Algo deu errado', 'error')
    }
  }

  useEffect(() => {
    const get = async () => {
      try {
        const contactInfo = await ContactService.getContactById(id)
        setContact(contactInfo)

        setIsLoading(false)
      } catch {
        history.push('/')
        toast('Contato não encontrado', 'error')
      }
    }
    get()
  }, [id])

  return (
    <>
      <PageHeader title={`Editar ${contact?.name}`} />

      {isLoading ? (
        <Loader />
      ) : (
        <ContactForm
          buttonLabel="Salvar alterações"
          onSubmit={handleSubmit}
          contactInfo={contact}
        />
      )}
    </>
  )
}

export default EditContact
