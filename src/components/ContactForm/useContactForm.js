import { useState, useEffect } from 'react'

import isValidEmail from '../../utils/isValidEmail'
import formatPhone from '../../utils/formatPhone'

import CategoryService from '../../services/CategoryService'

export default function useContactForm(onSubmit, contactInfo) {
  const [name, setName] = useState(contactInfo.name)
  const [email, setEmail] = useState(contactInfo.email)
  const [phone, setPhone] = useState(contactInfo.phone)
  const [categoryId, setCategoryId] = useState(contactInfo.categoryId)
  const [categories, setCategories] = useState([])

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [nameError, setNameError] = useState({
    error: false,
    message: 'Nome é obrigatório',
  })
  const [emailError, setEmailError] = useState({
    error: false,
    message: 'Email é obrigatório',
  })

  const isFormValid = name && email && !nameError.error && !emailError.error

  const handleNameChange = (e) => {
    setName(e.target.value)
    setNameError((prevError) => ({ ...prevError, error: false }))
    if (!e.target.value) {
      setNameError((prevError) => ({ ...prevError, error: true }))
    }
  }

  const handleEmailChange = (e) => {
    const email = e.target.value
    setEmail(email)
    setEmailError((prevError) => ({ ...prevError, error: false }))
    if (!email) {
      setEmailError({ error: true, message: 'Email é obrigatório' })
    } else if (!isValidEmail(email)) {
      setEmailError({ error: true, message: 'Email inválido' })
    }
  }

  const handlePhoneChange = (e) => {
    setPhone(formatPhone(e.target.value))
  }

  const handleCategoryChange = (e) => {
    setCategoryId(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsSubmitting(true)

    await onSubmit({ name, email, phone, categoryId })

    setIsSubmitting(false)
  }

  useEffect(() => {
    const get = async () => {
      try {
        const categoriesList = await CategoryService.listCategories()
        setCategories(categoriesList)
      } catch (e) {
        console.log(e)
      }
    }
    get()
  })

  return {
    name,
    email,
    phone,
    categoryId,
    categories,
    isSubmitting,
    nameError,
    emailError,
    isFormValid,
    handleNameChange,
    handleEmailChange,
    handlePhoneChange,
    handleCategoryChange,
    handleSubmit,
  }
}
