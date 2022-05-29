import { UList, ListElement, LiTextContainer } from './UList.style'

function List (props) {
  const { regalos, handleDelete, handleEdit } = props
  return (
    <UList>
      {regalos.map((regalo) => {
        return (
          <ListElement key={regalo.id}>
            <div>
              <div>
                <img src={regalo.image} alt={`image for ${regalo.image}`} />
              </div>
              <LiTextContainer>
                <p>
                  {regalo.newRegalo} x{regalo.cantidad}
                </p>
                <small>{regalo.destinatario}</small>
              </LiTextContainer>
            </div>
            <div>
              <i
                onClick={() => handleEdit(regalo.id)}
                className='fa fa-edit'
              />
              <i
                onClick={() => handleDelete(regalo.id)}
                className='fa fa-trash'
              />
            </div>
          </ListElement>
        )
      })}
    </UList>
  )
}

export default List
