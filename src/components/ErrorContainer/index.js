import PropTypes from 'prop-types'

import { Container, ErrorMessage } from './styles'

function ErrorContainer({ children, error, errorMessage }) {
	return (
		<Container error={error}>
			{children}
			<ErrorMessage error={error}>{errorMessage}</ErrorMessage>
		</Container>
	)
}

ErrorContainer.propTypes = {
	children: PropTypes.node.isRequired,
	error: PropTypes.bool.isRequired,
	errorMessage: PropTypes.string
}

export default ErrorContainer
