import React from 'react'
import { graphql } from 'gatsby'

export default (props) => {
  const { location } = props.data
  return (
    <>
    <h1>{location.name}</h1>
    <p>{location.description}</p>
    </>
  )
}

export const query = graphql`
query($id: String!) {
  location(id: { eq: $id }) {
    name
    description
  }
}
`
