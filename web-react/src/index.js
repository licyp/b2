import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { ThemeProviderDL } from './components/theme/DL_context'
import { WrapperDL, WrapperDLKK } from './components/theme/DL_apply'
// import { ThemeProviderCompact } from './components/theme/Compact_context'

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI || '/graphql',
  cache: new InMemoryCache(),
})

const Main = () => (
  <ThemeProviderDL>
    {/*<ThemeProviderCompact>*/}
    <ApolloProvider client={client}>
      <WrapperDL>
       <App />
      </WrapperDL>
    </ApolloProvider>
    {/*</ThemeProviderCompact>*/}
  </ThemeProviderDL>
)

ReactDOM.render(<Main />, document.getElementById('root'))
registerServiceWorker()
