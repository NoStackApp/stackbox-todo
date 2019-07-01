import gql from 'graphql-tag';
import { TYPE_TODO_ID, TYPE_ISCOMPLETED_ID } from '../config';

import { TODO_FRAGMENT, IS_COMPLETED_FRAGMENT } from './fragments';

export const TODOS_FOR_CURRENT_PROJECT_SOURCE_QUERY = gql`
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
        ...TodoParts
      }
      children {
        instance {
          ...IsCompletedParts
        }
      }
    }
  }

  ${TODO_FRAGMENT}
  ${IS_COMPLETED_FRAGMENT}
`;

export const TODOS_FOR_CURRENT_PROJECT_RELATIONSHIPS = {
  [TYPE_TODO_ID]: {
    [TYPE_ISCOMPLETED_ID]: null,
  },
};

