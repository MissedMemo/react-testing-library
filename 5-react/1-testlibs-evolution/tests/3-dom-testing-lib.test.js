import 'jest-dom/extend-expect'
import React from 'react'
import { getQueriesForElement } from 'dom-testing-library'
import { render } from 'react-dom'

import FavNumClass from '../src/favnum-class-based'
import FavNumHook from '../src/favnum-hook-based'

describe('traditional class-based component', () => {

  test('render input field and label', () => {
    const node = document.createElement('div')
    render( <FavNumClass />, node )
    const { getByLabelText } = getQueriesForElement(node)
    const input = getByLabelText( /favorite number/i )
    expect(input).toHaveAttribute('type','number')
  })
})

describe('new hook-based component', () => {

  test('render input field and label', () => {
    const node = document.createElement('div')
    render( <FavNumHook />, node )
    const { getByLabelText } = getQueriesForElement(node)
    const input = getByLabelText( /favorite number/i )
    expect(input).toHaveAttribute('type','number')
  })
})