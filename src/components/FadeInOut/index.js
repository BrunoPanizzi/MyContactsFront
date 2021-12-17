import styled from 'styled-components'
import PropTypes from 'prop-types'

const FadeInOut = styled.div`
	visibility: ${({ shouldAppear }) => shouldAppear ? 'visible' : 'hidden'};
	opacity: ${({ shouldAppear }) => shouldAppear ? 1 : 0};
	transition: 200ms;
`

FadeInOut.propTypes = {
	shouldAppear: PropTypes.bool.isRequired
}

export default FadeInOut