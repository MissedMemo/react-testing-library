import React, { Component, createRef } from 'react'
import { loadGreeting } from './greeting-api'

class GreetingLoader extends Component {

  inputRef = createRef()

  state = {
    greeting: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    const greeting = `Hello, ${this.inputRef.current.value}`
    this.setState({greeting})
  }


  render() {
    return <form onSubmit={this.handleSubmit}>
      <label htmlFor='nameInput'>Name:</label>
      <input id='nameInput' ref={ this.inputRef } />
      <button type='submit'>Submit</button>
      <div data-testid='greeting'>{ this.state.greeting }</div>
    </form>
  }
}

export default GreetingLoader
