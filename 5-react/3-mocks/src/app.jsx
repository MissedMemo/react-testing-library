import React from 'react'
import ClassBased_GreetingLoader from './greeting-loader-class'
import HooksBased_GreetingLoader from './greeting-loader-class'

const App = () => <>
  <ClassBased_GreetingLoader />
  <HooksBased_GreetingLoader />
</>

export default App