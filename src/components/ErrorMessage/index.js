import Button from '../Button'

import { Container } from './styles'

function ErrorMessage() {
  return (
    <Container>
      <h2>Algo deu errado</h2>
      <Button >Tentar novamente</Button>
    </Container>
  )
}

export default ErrorMessage
