const giftsReducer = (state = [], action) => {
  switch (action.type) {
    case 'agregar':
      return [...state, action.payload]
    case 'borrar':
      return state.filter(gift => gift.id !== action.payload.id)
    case 'borrarTodo':
      return []
    case 'editar':
      return state.map(gift => {
        return (
          gift.id === action.payload.id ? { ...action.payload } : gift
        )
      })
    default:
      return state
  }
}

export default giftsReducer
