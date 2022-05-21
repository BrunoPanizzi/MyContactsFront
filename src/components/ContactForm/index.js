import PropTypes from 'prop-types'
import { useState } from 'react'

import isValidEmail from '../../utils/isValidEmail'
import formatPhone from '../../utils/formatPhone'

import ErrorContainer from '../ErrorContainer'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'

function ContactForm({ buttonLabel, onSubmit }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')

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

  const handleSubmit = (e) => {
    e.preventDefault()

    onSubmit({ name, email, phone, category })
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <ErrorContainer error={nameError.error} errorMessage={nameError.message}>
        <Input
          placeholder="Nome..."
          type="text"
          value={name}
          error={nameError.error}
          onChange={handleNameChange}
        />
      </ErrorContainer>

      <ErrorContainer
        error={emailError.error}
        errorMessage={emailError.message}
      >
        <Input
          type="email"
          placeholder="Email..."
          value={email}
          error={emailError.error}
          onChange={handleEmailChange}
        />
      </ErrorContainer>

      <ErrorContainer error={false}>
        <Input
          type="tel"
          placeholder="Telefone..."
          value={phone}
          onChange={handlePhoneChange}
          maxLength={15}
        />
      </ErrorContainer>

      <ErrorContainer error={false}>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">categoria</option>
          <option value="insta">insta</option>
          <option value="zap">zap</option>
          <option value="disc">disc</option>
        </Select>
      </ErrorContainer>

      <Button type="submit" disabled={!isFormValid}>
        {buttonLabel}
      </Button>
    </form>
  )
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default ContactForm
