import PropTypes from 'prop-types'
import { useState } from 'react'	

import ErrorContainer from '../ErrorContainer'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'

function ContactForm({ buttonLabel }) {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [category, setCategory] = useState('')

	const [nameError, setNameError] = useState(false)
	const [emailError, setEmailError] = useState(false)

	const handleNameChange = (e) => {
		setName(e.target.value)
		setNameError(false)
		if (! e.target.value) {
			setNameError(true)
		}
	}

	const handleEmailChange = (e) => {
		setEmail(e.target.value)
		setEmailError(false)
		if (! e.target.value) {
			setEmailError(true)
		}
	} 
	
	const handleSubmit = (e) => {
		e.preventDefault()
		
		console.log({ name, email, phone, category })
	}

	return (
		<form onSubmit={handleSubmit}>
			<ErrorContainer
				error={nameError}
				errorMessage={'Nome é obrigatório'}
			>
				<Input
					placeholder='Nome...'
					type='text'
					value={name}
					error={nameError}
					onChange={handleNameChange}
				/>
			</ErrorContainer>

			<ErrorContainer
				error={emailError}
				errorMessage={'Email é obrigatório'}
			>
				<Input
					type='text'
					placeholder='Email...'
					value={email}
					error={emailError}
					onChange={handleEmailChange}
				/>
			</ErrorContainer>

			<ErrorContainer
				error={false}
			>
				<Input
					type='text'
					placeholder='Telefone...'
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
				/>
			</ErrorContainer>

			<ErrorContainer
				error={false}
			>
				<Select
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				>
					<option value='' >categoria</option>
					<option value='insta' >insta</option>
					<option value='zap' >zap</option>
					<option value='disc' >disc</option>
				</Select>
			</ErrorContainer>

			<Button 
				type='submit'
				disabled={false}
			>
				{buttonLabel}
			</Button>
		
		</form>
	)
}

ContactForm.propTypes = {
	buttonLabel: PropTypes.string.isRequired
}

export default ContactForm
