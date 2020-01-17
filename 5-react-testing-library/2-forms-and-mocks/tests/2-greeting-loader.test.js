import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import { issueGreeting as mockIssueGreeting } from '../src/greetingAPI'
import GLoaderHooks from '../src/g.loader.hooks-based'
import GLoaderClass from '../src/g.loader.class-based'

jest.mock('../src/greetingAPI')

afterEach( () => { jest.clearAllMocks() })

const mockInput = 'Joe'
const mockOutput = 'Hey, Joe!'

describe('test hooks-based implementation', () => {

  test( 'button should load greeting for non-empty name string', async () => {
    mockIssueGreeting.mockResolvedValueOnce(mockOutput)
    const { getByText, getByLabelText } = render(<GLoaderHooks />)
    const greeting = getByLabelText(/greeting/i)
    const input = getByLabelText(/name/i)
    const btnLoad = getByText(/load/i)
  
    input.value = mockInput
    fireEvent.click( btnLoad )
  
    expect( mockIssueGreeting ).toHaveBeenCalledWith( mockInput )
    expect( mockIssueGreeting ).toHaveBeenCalledTimes(1)
    await wait( () => {
      expect( greeting ).toHaveTextContent( mockOutput )
    })

  })

})

describe('test class-based implementation', () => {

  test( 'button should load greeting for non-empty name string', async () => {
    mockIssueGreeting.mockResolvedValueOnce(mockOutput)
    const { getByText, getByLabelText } = render(<GLoaderClass />)
    const greeting = getByLabelText(/greeting/i)
    const input = getByLabelText(/name/i)
    const btnLoad = getByText(/load/i)
  
    input.value = mockInput
    fireEvent.click( btnLoad )
  
    expect( mockIssueGreeting ).toHaveBeenCalledWith( mockInput )
    expect( mockIssueGreeting ).toHaveBeenCalledTimes(1)
    await wait( () => {
      expect( greeting ).toHaveTextContent( mockOutput )
    })

  })

})