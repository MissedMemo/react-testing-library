import React from 'react'
import { render } from 'react-dom'
import FavClass from '../src/favnum-class-based'
import FavHooks from '../src/favnum-hooks-based'

describe('traditional class-based component tests', () => {

  test('should render an input with expected label text', () => {
    const div = document.createElement('div')
    render( <FavClass />, div )
    expect( div.querySelector('input') ).toHaveAttribute('type', 'number')
    expect( div.querySelector('label') ).toHaveTextContent('Favorite Number')
  })
})

describe('new Hooks-based component test', () => {

  test('should render an input with expected label text', () => {
    const div = document.createElement('div')
    render( <FavHooks />, div )
    expect( div.querySelector('input') ).toHaveAttribute('type', 'number')
    expect( div.querySelector('label') ).toHaveTextContent('Favorite Number')
  })
})