import {
  ButtonContainer,
  FormContainer,
  Input,
  ModalBtn,
  ModalContainer
} from './FormStyles.style'
import { ToastContainer } from 'react-toast'

function Form (props) {
  const { handleFormChange, handleSubmit, handleAdd, newRegalo, cantidad, image } = props
  return (
    <FormContainer onSubmit={handleSubmit}>
      <ToastContainer position='top-right' delay={1500} />
      <ModalContainer>
        <Input
          name='newRegalo'
          onChange={handleFormChange}
          placeholder='Agregar regalo'
          type='text'
          value={newRegalo}
        />
        <Input
          name='image'
          onChange={handleFormChange}
          placeholder='http://img.com'
          type='text'
          value={image}
        />
        <Input
          min={1}
          name='cantidad'
          onChange={handleFormChange}
          type='number'
          value={cantidad}
        />
        <ButtonContainer>
          <ModalBtn onClick={handleAdd} type='button' backgroundColor='#ff0000' hover='#ffaaaa'>
            Cerrar
          </ModalBtn>
          <ModalBtn type='submit' backgroundColor='#ff0000' hover='#ffaaaa'>
            Agregar
          </ModalBtn>
        </ButtonContainer>
      </ModalContainer>
    </FormContainer>
  )
}

export default Form
