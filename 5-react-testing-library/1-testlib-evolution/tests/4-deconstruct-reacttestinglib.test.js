import React from 'react'
import ReactDOM from 'react-dom'
import { getQueriesForElement } from '@testing-library/dom'
import FavHooks from '../src/favnum-hooks-based'
import FavClass from '../src/favnum-class-based'

const render = ui => {
  const container = document.createElement('div')
  ReactDOM.render( ui, container )
  const queries = getQueriesForElement(container)
  return { container, ...queries }
}

describe('test hooks-based component version', () => {

  test('renders number input with appropriate label', () => {
    const { getByLabelText } = render(<FavHooks />)
    const input = getByLabelText( /favorite number/i )
    expect(input).toHaveAttribute('type','number')
  })
})


describe('test class-based component version', () => {

  test('renders number input with appropriate label', () => {
    const { getByLabelText } = render(<FavClass />)
    const input = getByLabelText( /favorite number/i )
    expect(input).toHaveAttribute('type','number')
  })
})
