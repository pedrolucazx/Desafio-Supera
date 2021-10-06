import '../styles/globals.css'
import { CardProvider } from '../contexts/CardContext'
import {SelectProvider} from '../contexts/Select/select'

function MyApp({ Component, pageProps }) {
  return (
    <CardProvider>
      <SelectProvider>
        <Component {...pageProps} />
      </SelectProvider>
    </CardProvider>
  )
}

export default MyApp
