import 'react-testing-library/cleanup-after-each'
import React from 'react'
import { render } from 'react-testing-library'
import App from '../src/app'

test( 'renders with expected layout', () => {
  const { container } = render(<App greeting='yowza!' />)
  expect(container.firstChild).toMatchSnapshot() // (firstChild skips snapshotting <div> wrapper)
})