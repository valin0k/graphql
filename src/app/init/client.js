// core
import ApolloClient from 'apollo-boost'

// graphql server
const uri = 'https://funded-pet-library.moonhighway.com/'

export const client = new ApolloClient({
  uri,
  connectToDevTools: true
})
