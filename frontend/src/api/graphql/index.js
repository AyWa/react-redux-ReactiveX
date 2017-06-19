import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { myApi } from 'api/config'

const uri = `${myApi}/graphql`

const networkInterface = createNetworkInterface({
  uri,
});

console.log(`graphQL endpoint: ${uri}`);

const client = new ApolloClient({
  networkInterface,
});

export default client
