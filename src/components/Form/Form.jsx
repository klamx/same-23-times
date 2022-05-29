import {
  ButtonContainer,
  FormContainer,
  Input,
  ModalBtn,
  ModalContainer
} from './FormStyles.style'
import { ToastContainer } from 'react-toast'

function Form (props) {
  const {
    handleFormChange,
    handleSubmit,
    setEditing,
    setAdding,
    adding,
    newRegalo,
    cantidad,
    image,
    destinatario,
    submitEdit
  } = props
  return (
    <FormContainer onSubmit={adding ? handleSubmit : submitEdit}>
      <ToastContainer position='top-right' delay={1500} />
      <ModalContainer>
        <Input
          name='newRegalo'
          onChange={handleFormChange}
          placeholder='Agregar regalo'
          type='text'
          value={newRegalo}
          autoFocus
        />
        <Input
          name='destinatario'
          onChange={handleFormChange}
          placeholder='Destinatario'
          type='text'
          value={destinatario}
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
          <ModalBtn
            onClick={() => {
              setAdding(false)
              setEditing(false)
            }}
            type='button'
            backgroundColor='#ff0000'
            hover='#ffaaaa'
          >
            Cerrar
          </ModalBtn>
          <ModalBtn type='submit' backgroundColor='#ff0000' hover='#ffaaaa'>
            {adding ? 'Agregar' : 'Editar'}
          </ModalBtn>
        </ButtonContainer>
      </ModalContainer>
    </FormContainer>
  )
}

export default Form
