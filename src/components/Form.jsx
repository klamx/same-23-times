function Form (props) {
  const { handleChange, handleSubmit, handleCantidad, newRegalo, cantidad } = props
  return (
    <form onSubmit={handleSubmit}>
      <input
        className='form_controller_input'
        onChange={handleChange}
        value={newRegalo}
        type='text'
        placeholder='Agregar regalos'
        name='regalo'
      />
      <div>
        <input
          className='form_controller_input'
          type='number'
          name='cantidad'
          value={cantidad}
          onChange={handleCantidad}
          min={1}
        />
        <button className='form_controller_btn' type='submit'>
          <i className='fa fa-plus' />
        </button>
      </div>
    </form>
  )
}

export default Form
