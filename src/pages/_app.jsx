import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import '../styles.css'

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
