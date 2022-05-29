import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
  }

  body {
    background-image: url('https://images.alphacoders.com/667/thumb-1920-667386.jpg');
    background-repeat: no-repeat;
    background-size: 100vw 100vh;
    display: grid;
    height: 100%;
    place-content: center;
  }
`
