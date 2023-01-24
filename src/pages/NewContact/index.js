import { toast } from 'react-hot-toast'

import ContactService from '../../services/ContactService'

import PageHeader from '../../components/PageHeader'
import ContactForm from '../../components/ContactForm'

function NewContact() {
  const handleSubmit = async (formData) => {
    try {
      const response = await ContactService.createContact(formData)
      console.log(response)

      toast.success('Contato criado')
    } catch {
      toast.error('Algo deu errado')
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
