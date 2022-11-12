import PropTypes from 'prop-types'

import sad from '../../assets/images/sad.svg'

import { Container } from './styles'

import Button from '../Button'

function ErrorMessage({ loadContacts }) {
  return (
    <Container>
      <img src={sad} alt="Erro" />
      <div>
        <h2>Ocorreu um erro ao obter os seus contatos!</h2>
        <Button onClick={loadContacts}>Tentar novamente</Button>
      </div>
    </Container>
  )
}

ErrorMessage.propTypes = {
  loadContacts: PropTypes.func.isRequired,
}

export default ErrorMessage

