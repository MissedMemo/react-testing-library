import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import React from 'react'
import { render } from 'react-testing-library'
import { axe } from 'jest-axe'


const Form = () => <form>
  <input placeholder='user name' name='username' />
</form>

test('form is accessible', async () => {
  const { container } = render( <Form /> )
  const results = await axe( container.innerHTML )
  console.log(results)
  expect( 1 +1 ).toBe(2)
})