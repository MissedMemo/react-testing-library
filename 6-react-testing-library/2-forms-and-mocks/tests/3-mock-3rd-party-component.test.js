import '@testing-library/jest-dom/extend-expect' // move to jest setup test framework script!

import React from 'react'
import { render, fireEvent, getByText } from '@testing-library/react'
import HideTheKids from '../src/components/uses-3rd-party-component'

jest.mock( 'react-transition-group', () => ({
  CSSTransition: props => props.in ? props.children: null
}))

test('shows hidden message when toggle is clicked', () => {
  const message = 'Just do it!'
  const { getByText, queryByText } = render(<HideTheKids>{ message }</HideTheKids>)

  const btn = getByText(/toggle/i)
  expect( queryByText(message) ).not.toBeInTheDocument()
  fireEvent.click(btn)
  expect( getByText(message) ).toBeInTheDocument()
  fireEvent.click(btn)
  expect( queryByText(message) ).not.toBeInTheDocument()
})