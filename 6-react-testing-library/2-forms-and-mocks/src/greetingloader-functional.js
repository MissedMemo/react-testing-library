import React, { Component, useState, useRef } from 'react'

const GreetingLoader = props => {

  const [greeting, setGreeting] = useState('')
  const inputRef = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setGreeting( `Hello, ${ inputRef.current.value }` )
  }

  return <form onSubmit={ handleSubmit }>
    <label htmlFor="name">Name</label>
    <input id="name" ref={ inputRef } />
    <button type="submit">Load Greeting</button>
    <div data-testid="greeting">{ greeting }</div>
  </form>
}

export default GreetingLoader