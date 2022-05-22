import { useState } from 'react'

function useForm (initialState = {}) {
  const [formValues, setFormValues] = useState(initialState)
  const handleFormChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  return [formValues, handleFormChange]
}

export default useForm
