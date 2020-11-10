import { gql } from '@apollo/client'

const GET_PERSONS = gql`
    query usersPaginateQuery(
        $first: Int
        $offset: Int
        $orderBy: [_PersonOrdering]
        $filter: _PersonFilter
    ) {
        Person(first: $first, offset: $offset, orderBy: $orderBy, filter: $filter) {
            name
            born
        }
        PersonCount
    }
`
const GET_MOVIES = gql`
    query usersPaginateQuery(
        $first: Int
        $offset: Int
        $orderBy: [_MovieOrdering]
        $filter: _MovieFilter
    ) {
        Movie(first: $first, offset: $offset, orderBy: $orderBy, filter: $filter) {
            title
            released
            tagline
        }
        MovieCount
    }
`
const GET_PERSON_COUNT_QUERY = gql`
    {
        PersonCount
    }
`
const GET_MOVIE_COUNT_QUERY = gql`
    {
        MovieCount
    }
`

//#########################################################################

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

export {
  CREATE_STEP,
  REMOVE_STEP,
  GET_MOVIES,
  GET_PERSONS,
  GET_MOVIE_COUNT_QUERY,
  GET_PERSON_COUNT_QUERY,
}
