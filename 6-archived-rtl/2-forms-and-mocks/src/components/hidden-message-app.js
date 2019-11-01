import React from 'react'
import HiddenMessage from './hidden-message'

const message = 'Hi, There!'

const App = () => (
  <HiddenMessage>
    { message }
  </HiddenMessage>
)

export default App