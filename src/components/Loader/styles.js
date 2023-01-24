import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'

const bounceAnimation = keyframes`
  0%   { transform: translateY(50%)  }
  33%  { transform: translateY(-50%) }
  66%  { transform: translateY(0)    }
  100%  { transform: translateY(0)    }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`

const Bounce = styled.div`
  position: relative;
  width: 0.625rem;
  aspect-ratio: 1;
  background: ${({ theme }) => theme.colors.primary.main};
  border-radius: 1000px;
  animation: ${bounceAnimation} 1s infinite alternate ease-in-out;
  animation-delay: ${({ delay }) => delay};
`

Bounce.propTypes = {
  delay: PropTypes.string,
}

export { Bounce }
