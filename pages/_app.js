import { Container } from '../src/components/utils/styledComponents'
import "../styles/index.css"
import CursoState from '../src/context/CursoState';


function MyApp({ Component, pageProps }) {
  return (
    <CursoState>
      <Container>
        <Component {...pageProps} />
      </Container>
    </CursoState>
  )
}

export default MyApp