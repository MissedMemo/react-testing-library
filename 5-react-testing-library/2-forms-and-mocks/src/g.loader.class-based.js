import React, { Component, createRef } from 'react'
import { issueGreeting } from '../src/greetingAPI'

class GreetingLoader extends Component {
  state = {
    greeting: ''
  }

  inputRef = createRef()

  handleSubmit = async e => {
    e.preventDefault()
    const name = this.inputRef.current.value
    const greeting = await issueGreeting(name)
    this.setState({greeting})
  }

  render() {

    return <form onSubmit={this.handleSubmit} >
      <label>Name:
        <input ref={ this.inputRef } />
      </label>
      <button type='submit'>Load Greeting</button>
      <div aria-label='greeting'>{ this.state.greeting }</div>
    </form>
  }
}

export default GreetingLoader