import 'react-testing-library/cleanup-after-each'
import React from 'react'
import { render } from 'react-testing-library'
import { createSerializer } from 'jest-emotion'
import * as emotion from '@emotion/core'
import App from '../src/app'

// custom serializer for emotion generates named styles in snapshot
expect.addSnapshotSerializer( createSerializer(emotion) )

test( 'renders with expected layout', () => {
  const { container } = render(<App greeting='yowza!' />)
  expect(container.firstChild).toMatchSnapshot() // (firstChild skips snapshotting <div> wrapper)
})