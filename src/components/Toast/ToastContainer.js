import { useToast } from './toastStore'

import { Container } from './styles'

import ToastMessage from './ToastMessage'

export default function ToastContainer() {
  const toasts = useToast((state) => state.toasts)

  return (
    <Container>
      {toasts.map((toast) => (
        <ToastMessage {...toast} key={toast.id} />
      ))}
    </Container>
  )
}
