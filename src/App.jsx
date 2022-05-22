import { nanoid } from 'nanoid'
import { useReducer, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toast'
import List from './components/List'
import Form from './components/Form'
import giftsReducer from './reducers/giftsReducer'
import useForm from './hooks/useForm'

const init = () => {
  return JSON.parse(localStorage.getItem('gifts')) || [] // eslint-disable-line
}

function App () {
  const [regalos, dispatch] = useReducer(giftsReducer, [], init)

  useEffect(() => {
    localStorage.setItem('gifts', JSON.stringify(regalos)) // eslint-disable-line
  }, [regalos])

  const [formValues, handleFormChange, handleReset] = useForm({
    newRegalo: '',
    cantidad: 1,
    image: ''
  })
  const { newRegalo, cantidad, image } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newRegalo === '') {
      toast.warn('No hay regalo para agregar a la lista')
      return
    }

    const found = regalos.filter(
      (regalo) => regalo.name.toLowerCase() === newRegalo.toLowerCase()
    )
    if (found.length > 0) {
      toast.warn('El regalo ya esta en la lista')
      return
    }

    const img = image !== '' ? image : 'https://via.placeholder.com/150'

    const newRegaloObj = {
      name: newRegalo,
      id: nanoid(),
      cantidad,
      image: img
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

  return (
    <div className='App'>
      <ToastContainer position='top-right' delay={1500} />
      <h1>Regalos:</h1>
      <div className='lista'>
        {regalos.length === 0
          ? (
            <h3>No hay regalos en la lista</h3>
            )
          : (
            <List regalos={regalos} handleDelete={handleDelete} />
            )}
      </div>
      <div>
        {regalos.length > 0 && (
          <button onClick={handleDeleteAll} className='borrar_todo'>
            Borrar todo
          </button>
        )}

        <Form
          newRegalo={newRegalo}
          cantidad={cantidad}
          image={image}
          handleSubmit={handleSubmit}
          handleFormChange={handleFormChange}
        />
      </div>
    </div>
  )
}

export default App
