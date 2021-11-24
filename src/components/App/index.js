import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../assets/styles/global'
import defaultTheme from '../../assets/styles/themes/defaultTheme'

import { Container } from './styles'

import Header from '../Header'
import ContactsList from '../ContactsList'

import { BrowserRouter } from 'react-router-dom'
import Routes from '../../Routes'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Routes />
          {/* <ContactsList /> */}
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
