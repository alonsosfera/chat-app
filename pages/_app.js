import { NextUIProvider } from '@nextui-org/react'
import "../styles/_global.sass"

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
