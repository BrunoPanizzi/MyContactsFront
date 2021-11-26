import PageHeader from '../../components/PageHeader'

import Input from '../../components/Input'
import Select from '../../components/Select'
import Button from '../../components/Button'

function NewContact() {
  return (
    <>
      <PageHeader title='Novo contato' />
      
      <Input type='text' placeholder='Nome...' />
      <Input type='text' placeholder='Telefone...' />
      <Input type='text' placeholder='Email...' />
      <Select>
        <option>Opssao</option>
        <option>Opssao</option>
        <option>Opssao</option>
      </Select>
      <Button>Criar contato</Button>
    </>
  )
}

export default NewContact
