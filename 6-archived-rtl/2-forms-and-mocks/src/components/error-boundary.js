import React, { Component } from 'react'
import { reportError } from '../api'

const errorStyles = {
  width: '100px',
  height: '100px',
  textAlign: 'center',
  padding: '35px 20px 5px 20px',
  borderRadius: '50%',
  backgroundColor: 'red'
}

class ErrorBoundary extends Component {

  state = {
    hasError: false
  }

  componentDidCatch( error, info ) {
    this.setState({ hasError: true })
    console.log('/////////////////// ACTUAL info:', info )
    reportError( error, info )
  }

  retry = () => {
    this.setState({ hasError: false })
  }

  render() {
    return this.state.hasError ? (
      <div style={ errorStyles }>
        <div>Whoops!</div>
        <button onClick={ this.retry }>Re-Try!</button>
      </div>
     ) : this.props.children
  }
}

export default ErrorBoundary