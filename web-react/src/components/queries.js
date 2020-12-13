import { gql } from '@apollo/client'

const GET_PERSONS = gql`
  query usersPaginateQuery(
    $first: Int
    $offset: Int
    $orderBy: [_PersonOrdering]
    $filter: _PersonFilter
  ) {
    Person(first: $first, offset: $offset, orderBy: $orderBy, filter: $filter) {
      id: _id
      name
      born
    }
    TotalCount: PersonCount
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
      id: _id
      title
      released
      tagline
    }
    TotalCount: MovieCount
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

const CREATE_MOVIE = gql`
  mutation CreateNode($title: String!) {
    CreateMovie(title: $title) {
      title
    }
  }
`

const REMOVE_MOVIE = gql`
  mutation DeleteNode($title: String!) {
    DeleteMovie(title: $title) {
      title
    }
  }
`

export {
  CREATE_MOVIE,
  REMOVE_MOVIE,
  GET_MOVIES,
  GET_PERSONS,
  GET_MOVIE_COUNT_QUERY,
  GET_PERSON_COUNT_QUERY,
}
