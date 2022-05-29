import { nanoid } from 'nanoid'
import { useReducer, useEffect, useState } from 'react'
import { toast } from 'react-toast'
import List from './components/List/List'
import Form from './components/Form/Form'
import giftsReducer from './reducers/giftsReducer'
import useForm from './hooks/useForm'
import { MainBtn, AppStyled, ListContainer, Title } from './AppStyled.style'
import { GlobalStyles } from './GlobalStyles'

const init = () => {
  return JSON.parse(localStorage.getItem('gifts')) || [] // eslint-disable-line
}

function App () {
  const [regalos, dispatch] = useReducer(giftsReducer, [], init)

  useEffect(() => {
    localStorage.setItem('gifts', JSON.stringify(regalos)) // eslint-disable-line
  }, [regalos])

  const [formValues, setFormValues, handleFormChange, handleReset] = useForm({
    newRegalo: '',
    cantidad: 1,
    image: '',
    destinatario: ''
  })
  const { newRegalo, cantidad, image, destinatario } = formValues
  const [adding, setAdding] = useState(false)
  const [editing, setEditing] = useState(false)

  const handleEdit = (id) => {
    const editingRegalo = regalos.find(regalo => regalo.id === id)
    setEditing(true)
    setFormValues(editingRegalo)
  }

  const handleAdd = () => {
    setAdding(true)
    handleReset()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newRegalo === '') {
      toast.warn('No hay regalo para agregar a la lista')
      return
    }

    const found = regalos.filter(
      (regalo) => regalo.newRegalo.toLowerCase() === newRegalo.toLowerCase()
    )
    if (found.length > 0) {
      toast.warn('El regalo ya esta en la lista')
      return
    }

    const img = image !== '' ? image : 'https://via.placeholder.com/150'

    const newRegaloObj = {
      newRegalo,
      id: nanoid(),
      cantidad,
      image: img,
      destinatario
    }

    const addRegalo = {
      type: 'agregar',
      payload: newRegaloObj
    }

    dispatch(addRegalo)
    handleReset()
  }

  const handleDelete = (id) => {
    const giftDelete = {
      type: 'borrar',
      payload: {
        id
      }
    }
    dispatch(giftDelete)
  }

  const handleDeleteAll = () => {
    dispatch({ type: 'borrarTodo' })
  }

  const submitEdit = (e) => {
    e.preventDefault()
    dispatch({ type: 'editar', payload: formValues })
    handleReset()
  }

  return (
    <AppStyled>
      <GlobalStyles />

      <Title>Regalos:</Title>
      <MainBtn onClick={() => handleAdd()}>Agregar Regalo</MainBtn>
      <ListContainer>
        {regalos.length === 0
          ? (
            <h3>No hay regalos en la lista</h3>
            )
          : (
            <List regalos={regalos} handleDelete={handleDelete} handleEdit={handleEdit} />
            )}
      </ListContainer>

      {regalos.length > 0 && (
        <MainBtn onClick={handleDeleteAll}>
          Borrar todo
        </MainBtn>
      )}

      {(adding || editing) && (
        <Form
          newRegalo={newRegalo}
          cantidad={cantidad}
          image={image}
          destinatario={destinatario}
          handleSubmit={handleSubmit}
          handleFormChange={handleFormChange}
          setAdding={setAdding}
          setEditing={setEditing}
          adding={adding}
          editing={editing}
          submitEdit={submitEdit}
        />
      )}
    </AppStyled>
  )
}

export default App
