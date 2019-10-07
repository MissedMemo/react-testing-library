import React, { Component } from 'react'

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
  }

  render() {
    return this.state.hasError ? (
      <div style={ errorStyles }>
        <div>Whoops!</div>
        <button>Re-Try!</button>
      </div>
     ) : this.props.children
  }
}

export default ErrorBoundary