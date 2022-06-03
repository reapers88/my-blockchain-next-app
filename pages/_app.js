//import '../styles/globals.css'
//import styled from 'styled-components'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'

const supportedChainIds = [4]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
      {/* <Header /> */}
    </ThirdwebWeb3Provider>
  )
}

export default MyApp

// const Title = styled.h1`
//   display: inline-block;
//   color: palevioletred;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
//   display: block;
// `
