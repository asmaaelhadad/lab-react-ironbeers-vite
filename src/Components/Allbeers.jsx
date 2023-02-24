import React from 'react'
import {Link} from 'react-router-dom'
import BeerList from './BeerList'

function Allbeers() {
  return (
    <div className='container-header' >

    <Link to="/" >Home</Link> 
    <h1>All Beers</h1>
      <BeerList />
    </div>
  )
}

export default Allbeers
