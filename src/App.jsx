import { nanoid } from 'nanoid'
import { useState } from 'react'
import List from './components/List'
import Form from './components/Form'

function App () {
  const [regalos, setRegalos] = useState([{ name: 'Medias', id: nanoid() }])
  const [newRegalo, setNewRegalo] = useState('')

  const handleChange = (e) => {
    setNewRegalo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newRegaloObj = {
      name: newRegalo,
      id: nanoid()
    }
    setRegalos([...regalos, newRegaloObj])
    setNewRegalo('')
  }

  const handleDelete = (id) => {
    const newRegalos = regalos.filter((regalo) => regalo.id !== id)
    setRegalos(newRegalos)
  }

  const handleDeleteAll = () => {
    setRegalos([])
  }

  return (
    <div className='App'>
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
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}

export default App
