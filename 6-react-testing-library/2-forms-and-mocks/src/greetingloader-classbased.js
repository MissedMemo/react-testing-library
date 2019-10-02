import React, { Component, createRef } from 'react'
import { loadGreeting } from './api'

class GreetingLoader extends Component {

  state = {
    greeting: ''
  }

  inputRef = createRef()

  handleSubmit = async e => {
    e.preventDefault()
    const greeting = await loadGreeting( this.inputRef.current.value )
    this.setState({ greeting })
  }

  render() {
    return <form onSubmit={ this.handleSubmit }>
      <label htmlFor="name">Name</label>
      <input id="name" ref={ this.inputRef } />
      <button type="submit">Load Greeting</button>
      <div data-testid="greeting">{ this.state.greeting }</div>
    </form>
  }
}

export default GreetingLoader