import { Container, Title, Input } from './styles'

function Header() {
	return (
		<Container>
			<Title>MyContacts</Title>
			<Input type='text' placeholder='Procure um contato...' />
		</Container>
	)
}

export default Header
