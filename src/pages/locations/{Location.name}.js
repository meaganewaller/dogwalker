import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'

export default (props) => {
  const { location } = props.data
  return (
    <Layout>
    <h1>{location.name}</h1>
    <p>{location.description}</p>
    </Layout>
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
