function List (props) {
  const { regalos, handleDelete } = props
  return (
    <ul>
      {regalos.map((regalo) => {
        return (
          <li key={regalo.id}>
            {regalo.name}{' '} x{regalo.cantidad}
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
