import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <>
  <h1>Locations</h1>
  <p>Check out where you can use DOGWALKER</p>

  <ul>
    <li>
      <Link to="/locations/jacksonville">Jacksonville</Link>
    </li>
    <li>
      <Link to="/locations/tampa">Tampa</Link>
    </li>
    <li>
      <Link to="/locations/orlando">Orlando</Link>
    </li>
  </ul>
  </>
)
