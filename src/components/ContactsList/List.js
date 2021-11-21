import { ListOrderButton } from './styles'

import arrow from '../../assets/images/arrow.svg'
import ContactCard from '../ContactCard'

function List() {

	return (
		<>
			<ListOrderButton>
				Nome
				<img src={arrow} alt='arrow' width={18} />
			</ListOrderButton>
			<>
				<ContactCard />
				<ContactCard />
			</>
		</>
	)
}

export default List
