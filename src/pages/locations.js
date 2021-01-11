import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

export default ({data}) => (

  <Layout>
  <h1>Locations</h1>
  <p>Check out where you can use DOGWALKER</p>

  <ul>
    {data.locations.nodes.map(location => (
      <li key={location.id}>
        <Link to={location.nameSlug}>{location.name}</Link>
      </li>
    ))}
  </ul>
  </Layout>
)

export const query = graphql`
{
  locations: allLocation {
    nodes {
      name
      nameSlug: gatsbyPath(filePath: "/locations/{Location.name}")
    }
  }
}
`

