import { Container, Bounce } from './styles'

function Loader() {
  return (
    <Container>
      <Bounce delay='.2s' />
      <Bounce delay='.4s' />
      <Bounce delay='.6s' />
      <Bounce delay='.8s' />
    </Container>
  )
}

export default Loader