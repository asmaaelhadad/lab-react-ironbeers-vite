import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {return (

  <div>
<Link to="/beers" >All Beers</Link>
<Link to="/random" >Random Beer</Link>
<Link to="/new" >New Beer</Link>
  </div>
)}


export default Home
