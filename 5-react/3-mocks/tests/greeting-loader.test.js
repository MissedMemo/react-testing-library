import React from 'react'
import { render, fireEvent, wait } from 'react-testing-library'
import GreetingLoader from '../src/greeting-loader'

test( 'should load greeting on click', async () => {
  const { getByLabelText, getByText, getByTestId } = render( <GreetingLoader /> )
  const input = getByLabelText( /name:/i )
  const button = getByText( /submit/i )
  input.value = 'Joe'
  fireEvent.click( button )
  await wait( () => expect( getByTestId( 'greeting' ) ).toHaveTextContent('Hello, Joe!') )
})
