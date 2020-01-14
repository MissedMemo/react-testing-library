import React from 'react'
import { render } from 'react-dom'
import FavHooks from '../src/favnum-hooks-based'
import FavClass from '../src/favnum-class-based'


describe('test hooks-based component version', () => {

  test('renders number input with appropriate label', () => {
    const div = document.createElement('div')
    render( <FavHooks />, div )
    expect(div.querySelector('input')).toHaveAttribute('type','number')
    expect(div.querySelector('label')).toHaveTextContent('Favorite Number:')
  })
})


describe('test class-based component version', () => {

  test('renders number input with appropriate label', () => {
    const div = document.createElement('div')
    render( <FavClass />, div )
    expect(div.querySelector('input')).toHaveAttribute('type','number')
    expect(div.querySelector('label')).toHaveTextContent('Favorite Number:')
  })
})
