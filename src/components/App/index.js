import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../../assets/styles/global'
import defaultTheme from '../../assets/styles/themes/defaultTheme'

import { Container } from './styles'

import Header from '../Header'
import ContactsList from '../ContactsList'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Container>
        <Header />
        <ContactsList />
      </Container>
    </ThemeProvider>
  )
}

export default App
