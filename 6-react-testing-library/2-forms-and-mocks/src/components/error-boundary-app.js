import React from 'react'
import ErrorBoundary from './error-boundary'

const BrokenComponent = () => {

  const suicide = () => { throw Error('ich bin kaput!') }

  return <div>
    Trying to render...
    { suicide() }
  </div>
}

const App = () => <ErrorBoundary>
  <BrokenComponent />
</ErrorBoundary>

export default App