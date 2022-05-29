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

  h1 {
    font-family: 'Shadows Into Light', cursive;
    font-size: 3.5rem;
  }

  .lista {
    height: 250px;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  ul {
    overflow-x: hidden;
    overflow-y: auto;
  }

  ul li {
    align-items: center;
    display: flex;
    gap: 0.3rem;
    justify-content: space-between;
    list-style: none;
    padding: 0.5rem 2rem 0 2rem;
    text-align: left;
  }

  li img {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }

  li div {
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  i {
    font-size: 2rem;
    color: #ccc;

    &:hover {
      color: #ff0000;
    }
  }
`
