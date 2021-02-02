import React from 'react'
import { Pet } from './bus/pet'

import { ApolloProvider } from '@apollo/react-hooks'

import { client } from './init/client'
console.log("__client__", client)
const App = () => {
  return (
    <ApolloProvider client={client}>
      <Pet />
    </ApolloProvider>
  )
}

export default App
