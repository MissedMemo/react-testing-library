import '@testing-library/jest-dom/extend-expect' // move to jest setup test framework script!

import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import GreetingLoader_ClassBased from '../src/greetingloader-classbased'
import GreetingLoader_Functional from '../src/greetingloader-functional'

const mockLoadGreeting = jest.fn( name => Promise.resolve(`Yowza, ${name}`) )

afterEach( () => {
  mockLoadGreeting.mock.calls = []
})


describe('class-based version of greetingloader', () => {

  test('loads greetings on click', async () => {
    const { getByText, getByLabelText, getByTestId } = render( <GreetingLoader_ClassBased loadGreeting={mockLoadGreeting} />)
    const nameInput = getByLabelText( /name/i )
    const loadButton = getByText( /load/i )
    nameInput.value = "Mary"
    fireEvent.click(loadButton)
    expect( mockLoadGreeting ).toHaveBeenCalledTimes(1)
    expect( mockLoadGreeting ).toHaveBeenCalledWith('Mary')
    await wait( () => expect( getByTestId('greeting') ).toHaveTextContent( 'Yowza, Mary' ) )
  })

})

describe('functional (Hooks-based) version of greetingloader', () => {

  test('loads greetings on click', async () => {
    const { getByText, getByLabelText, getByTestId } = render( <GreetingLoader_Functional loader={mockLoadGreeting} />)
    const nameInput = getByLabelText( /name/i )
    const loadButton = getByText( /load/i )
    nameInput.value = "Joe"
    fireEvent.click(loadButton)
    expect( mockLoadGreeting ).toHaveBeenCalledTimes(1)
    expect( mockLoadGreeting ).toHaveBeenCalledWith('Joe')
    await wait( () => expect( getByTestId('greeting') ).toHaveTextContent( 'Yowza, Joe' ) )
  })

})
