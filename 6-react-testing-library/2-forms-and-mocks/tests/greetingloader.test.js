import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, wait } from '@testing-library/react'
import GreetingLoader_ClassBased from '../src/greetingloader-classbased'
import GreetingLoader_Functional from '../src/greetingloader-functional'

describe('class-based version of greetingloader', () => {

  test('loads greetings on click', async () => {
    const { getByText, getByLabelText, getByTestId } = render( <GreetingLoader_ClassBased />)
    const nameInput = getByLabelText( /name/i )
    const loadButton = getByText( /load/i )
    nameInput.value = "Mary"
    fireEvent.click(loadButton)
    await wait( () => expect( getByTestId('greeting') ).toHaveTextContent( 'Hello, Mary' ) )
  })

})

describe('functional (Hooks-based) version of greetingloader', () => {

  test('loads greetings on click', async () => {
    const { getByText, getByLabelText, getByTestId } = render( <GreetingLoader_Functional />)
    const nameInput = getByLabelText( /name/i )
    const loadButton = getByText( /load/i )
    nameInput.value = "Mary"
    fireEvent.click(loadButton)
    await wait( () => expect( getByTestId('greeting') ).toHaveTextContent( 'Hello, Mary' ) )
  })

})
