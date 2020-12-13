import React from 'react'
import  ReactComponents from './ReactLearn'
import ReactStart from './ReactStart'
import { ErrorFallback } from './errorBoundary'
import { ErrorBoundary } from 'react-error-boundary'

export default function ReactPageStart() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
    <React.Fragment>
      <p>React Start</p>
      <ReactStart />
    </React.Fragment>
    </ErrorBoundary>
  )
}
