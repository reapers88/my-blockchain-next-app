//import Head from 'next/head'
// import Image from 'next/image'
//import Styles from '../styles/Home.module.css'
// import Home from '_app.js'
import styled from 'styled-components'

export default function Home() {
  //const { address, connectWallet } = useWeb3()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100 py-4">
      <Title>
        <p>
          The only thing standing in your way is what you say to yourself to
          stop you from walking on your way way
        </p>
        <div className="items-left justify-left flex min-h-screen flex-row ">
          <ul>
            Drop
            <li>money</li>
            <li>effert</li>
          </ul>
          <ol>
            order list Items
            <li>list Items</li>
            <ol>order </ol>
            <li>order list </li>
          </ol>
        </div>
      </Title>
      <Wrapper>
        <h1>Go ahead Click the button</h1>
        <Button onClick={() => connectWallet('injected')}>
          Connect Wallet
        </Button>
        <h1>Create</h1>
      </Wrapper>
    </div>
  )
}

const Title = styled.div`
  height: 50vh;
  color: black;
  background-color: blue;
  font-size: 1.1em;
  padding: 0.25em 1em;
  border: 3px solid palevioletred;
  border-radius: 3px;
  display: row;
  justify-content: center;
  align-items: center;
  flex: wrap;
`

// const Title = styled.div`
//   display: flex;
// `

const Wrapper = styled.div`
  display: flex;
  height: 50vh;
  max-width: 100vw;

  background-color: #0a0b0d;
  color: white;
  display: grid;
  place-items: center;
`

// const WalletConnect = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `

const Button = styled.div`
  border: 2px solid #1FE744;
  background-color: #B0062A;
  padding: 0.8rem;
  cursor: pointer;
  font-size; 1.5rem;
`
