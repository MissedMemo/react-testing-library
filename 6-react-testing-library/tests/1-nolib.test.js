import React from 'react'
import { render } from 'react-dom'
import FavClass from '../src/favnum-class-based'
import FavHooks from '../src/favnum-hooks-based'

describe('traditional class-based component tests', () => {

  test('should render an input with expected label text', () => {
    const div = document.createElement('div')
    render( <FavClass />, div )
    //console.log( div.innerHTML )
    expect( div.querySelector('input').type ).toBe('number')
    expect( div.querySelector('label').textContent ).toBe('Favorite Number')
  })
})

describe('new Hooks-based component test', () => {

  test('should render an input with expected label text', () => {
    const div = document.createElement('div')
    render( <FavHooks />, div )
    //console.log( div.innerHTML )
    expect( div.querySelector('input').type ).toBe('number')
    expect( div.querySelector('label').textContent ).toBe('Favorite Number')
  })
})
