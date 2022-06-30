import { useToast } from '../../components/Toast/toastStore'

import ContactService from '../../services/ContactService'

import PageHeader from '../../components/PageHeader'
import ContactForm from '../../components/ContactForm'

function NewContact() {
  const addToast = useToast((state) => state.addToast)

  const handleSubmit = async (formData) => {
    try {
      const response = await ContactService.createContact(formData)
      console.log(response)

      addToast('Contato criado')
    } catch {
      addToast('Algo deu errado', 'error')
    }
  }

  return (
    <>
      <PageHeader title="Novo contato" />

      <ContactForm buttonLabel="Criar contato" onSubmit={handleSubmit} />
    </>
  )
}

export default NewContact
