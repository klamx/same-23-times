import styled from 'styled-components'

export const FormContainer = styled.form`
  align-items: center;
  background: lightcoral;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: absolute;
  width: 100vw;

  /* From https://css.glass */
  -webkit-backdrop-filter: blur(7.4px);
  backdrop-filter: blur(7.4px);
  background: rgba(0, 0, 0, 0.27);
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 450px;
  justify-content: center;
  width: 350px;
`

export const Input = styled.input`
  border: 2px solid transparent;
  font-family: monospace;
  font-size: 1rem;
  height: 2rem;
  outline: none;
  padding: 1rem;

  &:focus {
    border-color: red;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`
export const ModalBtn = styled.button`
  background: #fff;
  border: 2px solid #fff;
  color: #f00;
  cursor: pointer;
  font-size: 1.3rem;
  height: 2rem;
  text-align: center;
  width: 8rem;
  outline: none;

  &:hover {
    background: ${props => props.backgroundColor};
    border: 2px solid #fff;
    color: #fff;
  }

  &:focus {
    border: 2px solid #fff;
    background: #F00;
    color: #fff;
  } 
`
