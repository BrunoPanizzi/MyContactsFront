import { useState, createContext, useContext, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Routes from '../../Routes'

import { defaultTheme } from '../../assets/styles/themes/defaultTheme'
import GlobalStyles from '../../assets/styles/global'

import { Container } from './styles'

import Header from '../Header'

const ColorSchemeContext = createContext()

export function useColorScheme() {
  return useContext(ColorSchemeContext)
}

console.log(defaultTheme)
function App() {
  const [colorScheme, setColorScheme] = useState(() => {
    const hasLocalStorage = localStorage.getItem('colorScheme')

    if (hasLocalStorage) {
      // make sure that there is nothing weird on the local storage
      return hasLocalStorage === 'dark' ? 'dark' : 'light'
    }

    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    const scheme = prefersDark ? 'dark' : 'light'

    localStorage.setItem('colorScheme', scheme)
    return scheme
  })

  useEffect(() => {
    localStorage.setItem('colorScheme', colorScheme)
  }, [colorScheme])

  const theme = defaultTheme[colorScheme]

  return (
    <BrowserRouter>
      <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme }}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />

          <Toaster
            position="bottom-center"
            toastOptions={{
              style: {
                backgroundColor: theme.colors.background,
                color: theme.text.main,
              },
              success: {
                duration: 5000,
                style: {
                  borderWidth: 2,
                  borderStyle: 'solid',
                  borderColor: theme.colors.primary[500],
                },
                iconTheme: {
                  primary: theme.colors.primary[500],
                },
              },
              error: {
                duration: 7000,
                style: {
                  borderWidth: 2,
                  borderStyle: 'solid',
                  borderColor: theme.colors.danger.main,
                },
                iconTheme: {
                  primary: theme.colors.danger.main,
                },
              },
            }}
          />

          <Container>
            <Header />
            <Routes />
          </Container>
        </ThemeProvider>
      </ColorSchemeContext.Provider>
    </BrowserRouter>
  )
}

export default App
