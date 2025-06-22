import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './theme'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import GlobalStyle from './GlobalStyles'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode((prev) => !prev)
  }
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Main />
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App
