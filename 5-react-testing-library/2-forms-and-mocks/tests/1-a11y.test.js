import React from 'react'
import { render } from '@testing-library/react'
import 'jest-axe/extend-expect'
import { axe } from 'jest-axe'

const Form = () => (<form>
  <label htmlFor='email'>email:</label>
  <input id='email' placeholder='email' />
</form>)


test('ensure form is accessible', async () => {
  const { container } = render(<Form />)
  const results = await axe(container)
  expect( results ).toHaveNoViolations()
})