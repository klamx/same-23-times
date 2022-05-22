function Form (props) {
  const { handleFormChange, handleSubmit, newRegalo, cantidad } = props
  return (
    <form onSubmit={handleSubmit}>
      <input
        className='form_controller_input'
        onChange={handleFormChange}
        value={newRegalo}
        type='text'
        placeholder='Agregar regalos'
        name='newRegalo'
      />
      <div>
        <input
          className='form_controller_input'
          type='number'
          name='cantidad'
          value={cantidad}
          onChange={handleFormChange}
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
