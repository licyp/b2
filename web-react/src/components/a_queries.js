import { gql } from '@apollo/client'

const GET_STEPS = gql`
  query usersPaginateQuery(
    $first: Int
    $offset: Int
    $orderBy: [_StepOrdering]
    $filter: _StepFilter
  ) {
    Step(first: $first, offset: $offset, orderBy: $orderBy, filter: $filter) {
      id: licypId
      name
      ref
      order
    }
    stepCount
  }
`

const GET_STEP_COUNT_QUERY = gql`
  {
    stepCount
  }
`

const CREATE_STEP = gql`
  mutation CreateStep($name: String!) {
    CreateStep(name: $name) {
      licypId
      name
    }
  }
`

const REMOVE_STEP = gql`
  mutation DeleteStep($id: ID!) {
    DeleteStep(licypId: $id) {
      licypId
    }
  }
`

export { GET_STEPS, CREATE_STEP, REMOVE_STEP, GET_STEP_COUNT_QUERY }
