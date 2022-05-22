function Form (props) {
  const { handleChange, handleSubmit, newRegalo } = props
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={newRegalo}
        type='text'
        placeholder='Agregar regalos'
        name='regalo'
      />
    </form>
  )
}

export default Form
