import React from 'react'
import {ErrorBoundary as ErrorBoundaryComponent} from 'react-error-boundary'

function ErrorFallback({error, resetErrorBoundary}: {error: Error, resetErrorBoundary: () => void}) {
  console.log(error)
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export default function ErrorBoundary({children}: {children: React.ReactNode}) {
  return (
    <ErrorBoundaryComponent
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      {children}
    </ErrorBoundaryComponent>
  )
}