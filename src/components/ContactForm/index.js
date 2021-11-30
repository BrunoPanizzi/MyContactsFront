import Input from '../Input'
import Select from '../Select'
import Button from '../Button'

function ContactForm() {
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

			<Button>
				Butão
			</Button>
		
		</form>
	)
}

export default ContactForm
