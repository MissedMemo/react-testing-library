import 'jest-dom/extend-expect'
import React from 'react'
import { render } from 'react-testing-library'

import FavNumClass from '../src/favnum-class-based'
import FavNumHook from '../src/favnum-hook-based'

describe('traditional class-based component', () => {

  test('render input field and label', () => {
    const { getByLabelText } = render( <FavNumClass /> )
    const input = getByLabelText( /favorite number/i )
    expect(input).toHaveAttribute('type','number')
  })
})

describe('new hook-based component', () => {

  test('render input field and label', () => {
    const { getByLabelText } = render( <FavNumHook /> )
    const input = getByLabelText( /favorite number/i )
    expect(input).toHaveAttribute('type','number')
  })
})