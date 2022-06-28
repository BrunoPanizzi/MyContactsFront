import { Container } from './styles'
import ToastMessage from './ToastMessage'

export default function ToastContainer() {
  return (
    <Container>
      <ToastMessage text="hello" type="default" />
      <ToastMessage text="hello" type="error" />
      <ToastMessage text="hello" type="success" />
    </Container>
  )
}
