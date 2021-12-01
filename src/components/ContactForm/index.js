import PropTypes from 'prop-types'

import Input from '../Input'
import Select from '../Select'
import Button from '../Button'

function ContactForm({ buttonLabel }) {
	return (
		<form>
			<Input
				type='text'
				placeholder='Nome...'
			/>

			<Input 
				type='text'
				placeholder='Telefone...'
			/>

			<Input 
				type='text'
				placeholder='Email...'
			/>

			<Select>
				<option>option</option>
				<option>option</option>
				<option>option</option>
			</Select>

			<Button type='submit'>
				{buttonLabel}
			</Button>
		
		</form>
	)
}

ContactForm.propTypes = {
	buttonLabel: PropTypes.string.isRequired
}

export default ContactForm
