import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../assets/styles/global'
import defaultTheme from '../../assets/styles/themes/defaultTheme'

import { BrowserRouter } from 'react-router-dom'
import Routes from '../../Routes'

import { Container } from './styles'

import Header from '../Header'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
