import ReactDOM from 'react-dom'
import propTypes from 'prop-types'

export default function Portal({ containerId, children}) {
  let container = document.getElementById(containerId)

  if (!container) {
    container = document.createElement('div')
    container.setAttribute('id', containerId)
    document.body.appendChild(container)                                
  }

  return ReactDOM.createPortal(children, container)
}

Portal.propTypes = {
  containerId: propTypes.string.isRequired,
  children: propTypes.node.isRequired
}






