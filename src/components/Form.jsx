function Form (props) {
  const { handleFormChange, handleSubmit, newRegalo, cantidad, image } = props
  return (
    <form onSubmit={handleSubmit}>
      <input
        className='form_controller_input'
        name='newRegalo'
        onChange={handleFormChange}
        placeholder='Agregar regalos'
        type='text'
        value={newRegalo}
      />
      <input
        className='form_controller_input'
        name='image'
        onChange={handleFormChange}
        placeholder='http://img.com'
        type='text'
        value={image}
      />
      <div>
        <input
          className='form_controller_input'
          min={1}
          name='cantidad'
          onChange={handleFormChange}
          type='number'
          value={cantidad}
        />
        <button className='form_controller_btn' type='submit'>
          <i className='fa fa-plus' />
        </button>
      </div>
    </form>
  )
}

export default Form
