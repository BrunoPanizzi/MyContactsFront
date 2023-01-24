import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import formatPhone from '../../../../utils/formatPhone'

import { Container, Info, Icons } from './styles'

import edit from '../../../../assets/images/edit.svg'
import trash from '../../../../assets/images/trash.svg'

import { useHome } from '../../homeStore'

function ContactCard({ id, name, email, phone, categoryId, categoryName }) {
  const setModal = useHome((s) => s.setModal)

  const handleOpenModal = () => {
    setModal(true, {
      contactId: id,
      contactName: name,
    })
  }

  return (
    <Container>
      <Info>
        <div>
          <h2>{name}</h2>
          {categoryId && <span>{categoryName}</span>}
        </div>
        {phone && <p>{formatPhone(phone.toString())}</p>}
        <p>{email}</p>
      </Info>

      <Icons>
        <Link to={`/edit/${id}`}>
          <img src={edit} alt="trash icon" />
        </Link>

        <button onClick={handleOpenModal}>
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
  categoryId: PropTypes.string,
  categoryName: PropTypes.string,
}

export default ContactCard
