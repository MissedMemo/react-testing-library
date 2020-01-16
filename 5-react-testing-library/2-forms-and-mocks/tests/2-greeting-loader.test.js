import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import { issueGreeting as mockIssueGreeting } from '../src/greetingAPI'
import GreetingLoader from '../src/greeting-loader'

jest.mock('../src/greetingAPI')

test( 'button should load greeting for non-empty name string', async () => {
  const mockOutput = 'Hey Joe!'
  mockIssueGreeting.mockResolvedValueOnce(mockOutput)
  const { getByText, getByLabelText } = render(<GreetingLoader />)
  const greeting = getByLabelText(/greeting/i)
  const input = getByLabelText(/name/i)
  const btnLoad = getByText(/load/i)

  input.value = 'Bob'
  fireEvent.click( btnLoad )

  expect( mockIssueGreeting ).toHaveBeenCalledWith( input.value )
  expect( mockIssueGreeting ).toHaveBeenCalledTimes(1)
  await wait( () => {
    expect( greeting ).toHaveTextContent( mockOutput )
  })
})