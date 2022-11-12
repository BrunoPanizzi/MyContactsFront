import PropTypes from 'prop-types'

import ErrorContainer from '../ErrorContainer'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'
import Loader from '../Loader'
import useContactForm from './useContactForm'

function ContactForm({ buttonLabel, onSubmit, contactInfo }) {
  const {
    name,
    email,
    phone,
    category,
    isSubmitting,
    nameError,
    emailError,
    isFormValid,
    handleNameChange,
    handleEmailChange,
    handlePhoneChange,
    handleCategoryChange,
    handleSubmit,
  } = useContactForm(onSubmit, contactInfo)

  return (
    <form onSubmit={handleSubmit} noValidate>
      <ErrorContainer error={nameError.error} errorMessage={nameError.message}>
        <Input
          placeholder="Nome..."
          type="text"
          value={name}
          error={nameError.error}
          onChange={handleNameChange}
          disabled={isSubmitting}
        />
      </ErrorContainer>

      <ErrorContainer
        error={emailError.error}
        errorMessage={emailError.message}
        disabled={isSubmitting}
      >
        <Input
          type="email"
          placeholder="Email..."
          value={email}
          error={emailError.error}
          onChange={handleEmailChange}
          disabled={isSubmitting}
        />
      </ErrorContainer>

      <ErrorContainer error={false}>
        <Input
          type="tel"
          placeholder="Telefone..."
          value={phone}
          onChange={handlePhoneChange}
          maxLength={15}
          disabled={isSubmitting}
        />
      </ErrorContainer>

      <ErrorContainer error={false}>
        <Select
          value={category}
          onChange={handleCategoryChange}
          disabled={isSubmitting}
        >
          <option value="">categoria</option>
          <option value="insta">insta</option>
          <option value="zap">zap</option>
          <option value="disc">disc</option>
        </Select>
      </ErrorContainer>

      <Button type="submit" disabled={!isFormValid || isSubmitting} fullWidth>
        {!isSubmitting && buttonLabel}
        {isSubmitting && <Loader />}
      </Button>
    </form>
  )
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  contactInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
}

ContactForm.defaultProps = {
  contactInfo: {
    name: '',
    email: '',
    phone: '',
    category: '',
  },
}

export default ContactForm
