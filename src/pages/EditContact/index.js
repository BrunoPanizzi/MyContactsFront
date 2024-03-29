import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import ContactService from '../../services/ContactService'

import ContactForm from '../../components/ContactForm'
import Loader from '../../components/Loader'
import PageHeader from '../../components/PageHeader'
import { toast } from 'react-hot-toast'

function EditContact() {
  const [isLoading, setIsLoading] = useState(true)
  const [contact, setContact] = useState()

  const { id } = useParams()
  const history = useHistory()

  const handleSubmit = async (formData) => {
    try {
      const response = await ContactService.editContact(id, formData)

      setContact(response)

      toast.success('Contato editado')
    } catch (e) {
      console.log(e)
      toast.error('Algo deu errado')
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
  }, [id, history, toast])

  return (
    <>
      <PageHeader
        title={contact ? `Editar ${contact?.name}` : 'Carregando...'}
      />

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
