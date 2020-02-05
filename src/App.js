import React from 'react'
import Box from './styledSystem'
import Link from './styledLink'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <h1>Home</h1>
        <Box color="black" bg="blue" p={3}>
            Tomato
        </Box>
        <Link>Test Link</Link>
      </ThemeProvider>
    )
  }
}

export default App