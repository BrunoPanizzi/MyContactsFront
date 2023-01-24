import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Routes from '../../Routes'

import defaultTheme from '../../assets/styles/themes/defaultTheme'
import GlobalStyles from '../../assets/styles/global'

import { Container } from './styles'

import Header from '../Header'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        <Toaster
          position="bottom-center"
          toastOptions={{
            success: {
              duration: 5000,
              style: {
                borderWidth: 2,
                borderStyle: 'solid',
                borderColor: defaultTheme.colors.primary[500],
              },
              iconTheme: {
                primary: defaultTheme.colors.primary[500],
              },
            },
            error: {
              duration: 7000,
              style: {
                borderWidth: 2,
                borderStyle: 'solid',
                borderColor: defaultTheme.colors.danger.main,
              },
              iconTheme: {
                primary: defaultTheme.colors.danger.main,
              },
            },
          }}
        />

        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
