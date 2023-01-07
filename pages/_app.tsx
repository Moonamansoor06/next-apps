import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'



const theme = extendBaseTheme({
  components: {
    Heading:{
      baseStyle: {
        fontWeight: 'bold',
        font:"serif",
        
      },
      
      sizes: {
        xl: {
          h: '64px',
          fontSize: 'xl',
          px: '64px',
        },
      },
  
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
       
        solid: (props: StyleFunctionProps) => ({
          bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
        }),
        // 5. We can add responsive variants
        sm: {
          bg: 'gray.500',
          fontSize: 'xl',
        },
        xl: {
          h: '64px',
          bg: 'gray.500',
          fontSize: 'xl',
          px: '64px',
        },
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        size: 'xl', // default is md
        variant: 'sm', // default is solid
        colorScheme: 'blue', // default is gray
      },
    },
  },
    }

  )


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme}>
  <Component {...pageProps} />
  </ChakraBaseProvider>
  )
}
