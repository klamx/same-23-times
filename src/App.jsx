import { useState } from 'react'

function App () {
  const [regalos, setRegalos] = useState([])
  const [newRegalo, setNewRegalo] = useState('')

  const handleChange = (e) => {
    setNewRegalo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setRegalos([...regalos, newRegalo])
    setNewRegalo('')
  }

  return (
    <div className='App'>
      <h1>Regalos:</h1>
      <ul>
        {regalos.map((regalo) => {
          return <li key={regalo}>{regalo}</li>
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={newRegalo}
          type='text'
          placeholder='Agregar regalos'
          name='regalo'
        />
      </form>
    </div>
  )
}

export default App
