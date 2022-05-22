function List (props) {
  const { regalos, handleDelete } = props
  return (
    <ul>
      {regalos.map((regalo) => {
        return (
          <li key={regalo.id}>
            <div>
              <img src={regalo.image} alt={`image for ${regalo.image}`} />
              {regalo.name} x{regalo.cantidad}
            </div>
            <i
              onClick={() => handleDelete(regalo.id)}
              className='fa fa-trash'
            />
          </li>
        )
      })}
    </ul>
  )
}

export default List
