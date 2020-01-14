import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import user from '@testing-library/user-event'
import FavHooks from '../src/favnum-hooks-based'
import FavClass from '../src/favnum-class-based'

const errorMsgFragment = /invalid/i

describe('test hooks-based component version', () => {

  test('renders number input with appropriate label', () => {
    const { getByLabelText } = render(<FavHooks />)

    const input = getByLabelText( /favorite number/i )
    expect(input).toHaveAttribute('type','number')
  })

  test('displays error on invalid input', () => {
    const { getByLabelText, getByRole, queryByText } = render(<FavHooks />)
    const input = getByLabelText( /favorite number/i )
    
    expect( queryByText( errorMsgFragment )).toBeFalsy()
    fireEvent.change(input, {target: {value: '45'}})
    expect( getByRole( /alert/i )).toHaveTextContent( errorMsgFragment )
  })
})


describe('test class-based component version', () => {

  test('renders number input with appropriate label', () => {
    const { getByLabelText } = render(<FavClass />)

    const input = getByLabelText( /favorite number/i )
    expect(input).toHaveAttribute('type','number')
  })

  test('displays error on invalid input', () => {
    const { getByLabelText, getByRole, queryByText } = render(<FavClass />)
    const input = getByLabelText( /favorite number/i )
    
    expect( queryByText( errorMsgFragment )).toBeFalsy()
    user.type( input, '45') //superior to fireEvent, to capture focus, keystrokes etc.
    expect( getByRole( /alert/i )).toHaveTextContent( errorMsgFragment )
  })

})
