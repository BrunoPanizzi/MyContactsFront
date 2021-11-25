import PropTypes  from 'prop-types'

import { Link } from 'react-router-dom'

import arrow from '../../assets/images/arrow.svg'

import { Container } from './styles'

function PageHeader({ title }) {
  return (
    <Container>
      <Link to='/'>
        <img src={arrow} alt='go back' />
        Voltar
      </Link>
      <strong>{ title }</strong>
    </Container>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default PageHeader
