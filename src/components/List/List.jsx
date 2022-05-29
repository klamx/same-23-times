import { UList, ListElement } from './UList.style'

function List (props) {
  const { regalos, handleDelete } = props
  return (
    <UList>
      {regalos.map((regalo) => {
        return (
          <ListElement key={regalo.id}>
            <div>
              <img src={regalo.image} alt={`image for ${regalo.image}`} />
              {regalo.name} x{regalo.cantidad}
            </div>
            <i
              onClick={() => handleDelete(regalo.id)}
              className='fa fa-trash'
            />
          </ListElement>
        )
      })}
    </UList>
  )
}

export default List
