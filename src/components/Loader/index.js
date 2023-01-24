import { Container, Bounce } from './styles'

function Loader(props) {
  return (
    <Container>
      <Bounce delay=".2s" {...props} />
      <Bounce delay=".4s" {...props} />
      <Bounce delay=".6s" {...props} />
      <Bounce delay=".8s" {...props} />
    </Container>
  )
}

export default Loader
