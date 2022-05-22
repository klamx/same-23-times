const giftsReducer = (state = [], action) => {
  switch (action.type) {
    case 'agregar':
      return [...state, action.payload]
    case 'borrar':
      return state.filter(gift => gift.id !== action.payload.id)
    case 'borrarTodo':
      return []
    default:
      return state
  }
}

export default giftsReducer
