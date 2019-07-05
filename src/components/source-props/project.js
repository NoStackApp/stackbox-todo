import gql from 'graphql-tag';
import { TYPE_PROJECT_ID } from '../../config';

import { PROJECT_FRAGMENT } from './fragments';

export const PROJECTS_FOR_CURRENT_USER_SOURCE_QUERY = gql`
  query SOURCE(
    $id: ID!
    $typeRelationships: String!
    $parameters: String
  ) {
    sourceData(
      sourceId: $id
      typeRelationships: $typeRelationships
      parameters: $parameters
    ) {
      instance {
        ...ProjectParts
      }
    }
  }

  ${PROJECT_FRAGMENT}
`;

export const PROJECTS_FOR_CURRENT_USER_RELATIONSHIPS = {
  [TYPE_PROJECT_ID]: null,
};

