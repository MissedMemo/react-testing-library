import React, { useState, useEffect } from 'react'
import { issueGreeting } from '../src/greetingAPI'

const GreetingLoader = () => {

  const [greeting, setGreeting] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const data = await issueGreeting(e.target.elements.name.value)
    setGreeting( data )
  }

  return <form onSubmit={ handleSubmit }>
    <label htmlFor='name'>Name:</label>
    <input id='name' />
    <button type='submit'>Load Greeting</button>
    <div aria-label='greeting'>{ greeting }</div> 
  </form>
}

export default GreetingLoader