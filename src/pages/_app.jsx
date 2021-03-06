import { ChakraProvider } from '@chakra-ui/react'
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import '../styles.css'

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('598387704680918') // facebookPixelId
        ReactPixel.pageView()
        ReactPixel.fbq('track', 'Lead')

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])
  return (
    <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
