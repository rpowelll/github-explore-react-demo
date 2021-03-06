import React from 'react'
import errorIcon from './errorIcon.svg'
import './Error.css'

/**
 * A component for displaying errors
 *
 * @param {Object} props the React component's props
 * @param {string} props.message the error message to display
 */
class Error extends React.Component {
  render() {
    return (
      <div className="Error">
        <img className="Error__icon" src={errorIcon} />
        <span className="Error__message">{this.props.message}</span>
      </div>
    )
  }
}

export default Error
