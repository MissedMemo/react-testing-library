import React, { useState, useRef, useEffect } from 'react'
import { loadGreeting } from './greeting-api'

const GreetingLoader = () => {

  const inputRef = useRef()

  const [greeting, setGreeting] = useState('')
  
  const handleSubmit = async e => {
    e.preventDefault()
    const name = inputRef.current.value
    const greeting = await loadGreeting(name)
    setGreeting(greeting)
  }

  return <form onSubmit={handleSubmit}>
    <label htmlFor='nameInput'>Name:</label>
    <input id='nameInput' ref={ inputRef } />
    <button type='submit'>Submit</button>
    <div data-testid='greeting'>{ greeting }</div>
  </form>
}

export default GreetingLoader
