import React from 'react'
import { render } from 'react-dom'
import { queries, getQueriesForElement } from '@testing-library/dom'
import FavHooks from '../src/favnum-hooks-based'
import FavClass from '../src/favnum-class-based'


describe('test hooks-based component version', () => {

  test('renders number input with appropriate label', () => {
    const div = document.createElement('div')
    render( <FavHooks />, div )
    const { getByLabelText } = getQueriesForElement(div)
    const input = getByLabelText( /favorite number/i )
    expect(input).toHaveAttribute('type','number')
  })
})


describe('test class-based component version', () => {

  test('renders number input with appropriate label', () => {
    const div = document.createElement('div')
    render( <FavClass />, div )
    const { getByLabelText } = getQueriesForElement(div)
    const input = getByLabelText( /favorite number/i )
    expect(input).toHaveAttribute('type','number')
  })
})
