import React from 'react'
import HideTheKids from './uses-3rd-party-component'

const message = 'Hi, There!'

const App = () => (
  <HideTheKids>
    { message }
  </HideTheKids>
)

export default App