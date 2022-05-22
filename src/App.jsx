import { useState } from 'react'

function App () {
  const [regalos] = useState(['medias', 'camisetas', 'pantalones'])

  return (
    <div className='App'>
      <h1>Regalos:</h1>
      <ul>
        {regalos.map(regalo => {
          return (
            <li key={regalos}>{regalo}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
