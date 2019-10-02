import React from 'react'
import { render } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'

const PoorForm = () => <form>
  <input placeholder="Hello" name="poor-form" />
</form>

const GoodForm = () => <form>
  <label htmlFor="good-form">Good Form</label>
  <input id="good-form" placeholder="Hello" name="good-form" />
</form>

test( 'inaccessible forms SHOULD generate violations', async () => {
  const { container } = render(<PoorForm />)
  // you'd never actually test violations DO exist, but for demo purposes...
  expect( await axe(container.innerHTML) ).not.toHaveNoViolations()
})

test( 'accessible forms should NOT generate violations', async () => {
  const { container } = render(<GoodForm />)
  expect( await axe(container.innerHTML) ).toHaveNoViolations()
})