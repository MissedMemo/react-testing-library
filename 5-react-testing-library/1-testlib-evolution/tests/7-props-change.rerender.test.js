import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import user from '@testing-library/user-event'
import FavHooks from '../src/favnum-hooks-based'
import FavClass from '../src/favnum-class-based'

const msgFragment = /invalid/i

describe('test hooks-based component version', () => {

  test('renders number input with appropriate label', () => {
    const { getByLabelText } = render(<FavHooks />)

    const input = getByLabelText( /favorite number/i )
    expect(input).toHaveAttribute('type','number')
  })

  test('displays error on invalid input, with no error on valid input', () => {
    const { getByLabelText, getByText, queryByText, rerender } = render(<FavHooks />)
    const input = getByLabelText( /favorite number/i )
    
    expect( queryByText( msgFragment )).toBeNull()

    // fireEvent.change(input, {target: {value: '45'}})
    user.type( input, '45') // SUPERIOR to fireEvent (captures focus, keystrokes etc.)

    //expect( getByRole( /alert/i )).toHaveTextContent( msgFragment ) // verbose syntax #1
    //expect( getByText( msgFragment )).toBeInTheDocument // verbose syntax #2
    getByText( msgFragment ) // PREFERRED syntax!

    rerender( <FavHooks max={45} />)
    expect( queryByText( msgFragment )).toBeNull()
  })
})


describe('test class-based component version', () => {

  test('renders number input with appropriate label', () => {
    const { getByLabelText } = render(<FavClass />)

    const input = getByLabelText( /favorite number/i )
    expect(input).toHaveAttribute('type','number')
  })

  test('displays error on invalid input, with no error on valid input', () => {
    const { getByLabelText, queryByText, getByText, rerender } = render(<FavClass />)
    const input = getByLabelText( /favorite number/i )
    
    expect( queryByText( msgFragment )).toBeNull()

    fireEvent.change(input, {target: {value: '45'}})
    // user.type( input, '45') // SUPERIOR to fireEvent (captures focus, keystrokes etc.)

    //expect( getByRole( /alert/i )).toHaveTextContent( msgFragment ) // verbose syntax #1
    //expect( getByText( msgFragment )).toBeInTheDocument // verbose syntax #2
    getByText( msgFragment ) // PREFERRED syntax!

    rerender( <FavClass max={45} />)
    expect( queryByText( msgFragment )).toBeNull()
  })

})
