import { useState } from 'react'

function useForm (initialState = {}) {
  const [formValues, setFormValues] = useState(initialState)
  const handleFormChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleReset = () => {
    setFormValues(initialState)
  }

  return [formValues, setFormValues, handleFormChange, handleReset]
}

export default useForm
