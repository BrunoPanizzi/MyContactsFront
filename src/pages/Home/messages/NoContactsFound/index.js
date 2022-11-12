import PropTypes from 'prop-types'

import magnifierQuestion from '../../../../assets/images/magnifier-question.svg'

import { Container } from './styles'

export default function NoContactsFound({ search }) {
  return (
    <Container>
      <img src={magnifierQuestion} alt="Nenhum contato" />
      <p>
        Nenhum resultado foi encontrado para <strong>”{search}”</strong>.
      </p>
    </Container>
  )
}

NoContactsFound.propTypes = {
  search: PropTypes.string.isRequired,
}
