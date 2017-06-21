import { gql } from 'react-apollo';

export const getRepository= gql`
  query getRepository {
    feed (type: NEW, limit: 5) {
      repository {
        owner { login }
        name
      }

      postedBy { login }
    }
  }
`;

export default getRepository
