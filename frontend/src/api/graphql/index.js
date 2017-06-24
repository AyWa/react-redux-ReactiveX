import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { myApi } from 'api/config'

const uri = `${myApi}/graphql`

export const networkInterface = createNetworkInterface({
  uri,
});

export const client = new ApolloClient({
  networkInterface,
})

export default client
