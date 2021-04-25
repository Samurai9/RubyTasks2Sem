/* eslint-disable */

import { gql } from '@apollo/client';
import task from '../fragments/task';

export default gql`
  mutation removeTask($input: DestroyCardInput!) {
    destroyCard(input: $input) {
      ...TaskFragment
    }
  }
  ${task}
`;
