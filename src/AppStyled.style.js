import styled from 'styled-components'

export const AppStyled = styled.div`
  font-family: sans-serif;
  text-align: center;
  width: 450px;
  height: 500px;
  font-size: 1.5rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  /* From https://css.glass */
  -webkit-backdrop-filter: blur(7.2px);
  backdrop-filter: blur(7.2px);
  background: rgba(255, 255, 255, 0.41);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.34);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`
export const MainBtn = styled.button`
  width: 85%;
  height: 2rem;
  background: #ff0000;
  border: 2px solid #f00;
  color: #fff;
  font-size: 1.3rem;

  &:hover {
    background: #fff;
    color: #f00;
  }
`
export const ListContainer = styled.div`
  height: 250px;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`

export const Title = styled.h1`
  font-family: 'Shadows Into Light', cursive;
  font-size: 3.5rem;
`
