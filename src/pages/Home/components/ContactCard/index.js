import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import formatPhone from '../../../../utils/formatPhone'
import useToggle from '../../../../hooks/useToggle'

import { useToast } from '../../../../components/Toast/toastStore'

import ContactService from '../../../../services/ContactService'

import { Container, Info, Icons } from './styles'

import edit from '../../../../assets/images/edit.svg'
import trash from '../../../../assets/images/trash.svg'

import Modal from '../../../../components/Modal'

function ContactCard({ id, name, email, phone, category, loadContacts }) {
  const addToast = useToast((store) => store.addToast)

  const [modal, toggleModal] = useToggle(false, true)

  const handleDelete = async () => {
    try {
      await ContactService.deleteContact(id)

      addToast('Contato deletado')

      toggleModal()
      loadContacts()
    } catch {
      addToast('Não foi possivel remover o contato', 'error')
    }
  }

  return (
    <Container>
      <Modal
        onClose={toggleModal}
        shouldAppear={modal}
        action={handleDelete}
        danger
        title={`Você realmente deseja excluir ${name}?`}
        content="Essa ação não pode ser desfeita."
        confirmLabel="Excluir"
      />
      <Info>
        <div>
          <h2>{name}</h2>
          {category && <span>{category}</span>}
        </div>
        {phone && <p>{formatPhone(phone.toString())}</p>}
        <p>{email}</p>
      </Info>

      <Icons>
        <Link to={`/edit/${id}`}>
          <img src={edit} alt="trash icon" />
        </Link>

        <button onClick={toggleModal}>
          <img src={trash} alt="trash icon" />
        </button>
      </Icons>
    </Container>
  )
}

ContactCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  loadContacts: PropTypes.func.isRequired,
  phone: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  category: PropTypes.string,
}

export default ContactCard
