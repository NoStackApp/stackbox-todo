import gql from 'graphql-tag';

export const PROJECT_FRAGMENT = gql`
  fragment ProjectParts on Instance {
    id
    value
  }
`;

export const TODO_FRAGMENT = gql`
  fragment TodoParts on Instance {
    id
    value
  }
`;

export const IS_COMPLETED_FRAGMENT = gql`
  fragment IsCompletedParts on Instance {
    id
    value
  }
`;
