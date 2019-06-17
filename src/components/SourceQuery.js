import gql from 'graphql-tag';

const SOURCE_QUERY = gql`
  query SOURCE(
    $id: ID!
    $typeHierarchy: String!
    $unrestricted: Boolean!
    $parameters: String
  ) {
    sourceData(
      sourceId: $id
      typeHierarchy: $typeHierarchy
      unrestricted: $unrestricted
      parameters: $parameters
    ) {
      instance {
        id
        value
      }
    }
  }
`;

export default SOURCE_QUERY;
