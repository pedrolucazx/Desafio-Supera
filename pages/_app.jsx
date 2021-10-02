import '../styles/globals.css'
import {CardProvider} from '../contexts/CardContext'
function MyApp({ Component, pageProps }) {
  return (
    <CardProvider>
      <Component {...pageProps} />
    </CardProvider>
    )
}

export default MyApp
