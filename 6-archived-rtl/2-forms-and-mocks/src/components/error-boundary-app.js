import React, { useState, useEffect } from 'react'
import ErrorBoundary from './error-boundary'

const BrokenComponent = () => {

  const [broken, setBroken] = useState(false)

  useEffect( () => {
    if (broken) {
      throw Error('ich bin kaput!')
    }
  }, [broken] )

  return <div>
    <button onClick={ () => setBroken(true) }>Kill Me Now!</button>
  </div>
}

const App = () => <ErrorBoundary>
  <BrokenComponent />
</ErrorBoundary>

export default App