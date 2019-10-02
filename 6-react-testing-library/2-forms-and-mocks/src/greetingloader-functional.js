import React, { Component, useState, useRef, useEffect } from 'react'
import { loadGreeting } from './api'

const GreetingLoader = ({ loader = loadGreeting }) => {

  const [greeting, setGreeting] = useState('')
  const [name, setName] = useState('')
  const inputRef = useRef()

  useEffect( () => {
    if ( name ) {
      ( async () => {
        setGreeting( await loader(name) )
      })()
    }
  }, [ name ] )

  const handleSubmit = e => {
    e.preventDefault()
    setName( inputRef.current.value )
  }

  return <form onSubmit={ handleSubmit }>
    <label htmlFor="name">Name</label>
    <input id="name" ref={ inputRef } />
    <button type="submit">Load Greeting</button>
    <div data-testid="greeting">{ greeting }</div>
  </form>
}

export default GreetingLoader