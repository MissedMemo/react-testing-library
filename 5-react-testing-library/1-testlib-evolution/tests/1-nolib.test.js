import React from 'react'
import { render } from 'react-dom'
import FavHooks from '../src/favnum-hooks-based'
import FavClass from '../src/favnum-class-based'

describe('test hooks-based component version', () => {

  test('renders number input with appropriate label', () => {
    const div = document.createElement('div')
    render( <FavHooks />, div )
    expect(div.querySelector('input').type).toBe('number')
    expect(div.querySelector('label').textContent).toBe('Favorite Number:')
  })
})


describe('test class-based component version', () => {

  test('renders number input with appropriate label', () => {
    const div = document.createElement('div')
    render( <FavClass />, div )
    expect(div.querySelector('input').type).toBe('number')
    expect(div.querySelector('label').textContent).toBe('Favorite Number:')
  })
})
