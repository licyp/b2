import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { ThemeProviderDL } from './theme/DL_context'
import { WrapperDL } from './theme/DL_apply'

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI || '/graphql',
  cache: new InMemoryCache(),
})

const Main = () => (
   <ThemeProviderDL>
    <WrapperDL>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
      </WrapperDL>
    </ThemeProviderDL>
)

ReactDOM.render(<Main />, document.getElementById('root'))
registerServiceWorker()
