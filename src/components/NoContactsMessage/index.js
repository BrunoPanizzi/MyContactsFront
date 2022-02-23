import emptyBox from '../../assets/images/empty-box.svg'

import { Container } from './styles'

export default function NoContactsMessage() {
	console.log(emptyBox)
	
	return (
		<Container>
			<img src={emptyBox} />
			<p>
				Você ainda não tem nenhum contato cadastrado! 
				<br />
				Clique no botão <strong>”Novo contato”</strong> à cima para cadastrar o seu primeiro!
			</p>
		</Container>
)
}