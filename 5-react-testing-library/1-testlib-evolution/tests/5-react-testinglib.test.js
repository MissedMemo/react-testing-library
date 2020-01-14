import React from 'react'
import { render } from '@testing-library/react'
import FavHooks from '../src/favnum-hooks-based'
import FavClass from '../src/favnum-class-based'

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
