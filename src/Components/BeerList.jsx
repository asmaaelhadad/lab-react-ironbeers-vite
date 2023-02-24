import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function BeerList () {
    
    const [Beers, setBeers] = useState([])
const fetchData = async () => {
 /* const response = await axios.get('https://ironbnb-m3.herokuapp.com/apartments')
 setApartments(response.data) */
 const response = await fetch('https://ih-beers-api2.herokuapp.com/beers')
 const parsed = await response.json()

 setBeers(parsed)  }
useEffect(() => {
 fetchData()
}, [])

useEffect(() => {
 console.log(Beers)
}, [Beers])

    
 return (
<div>
  {Beers.map(beer => (
        <div style={{ border: '1px solid white', borderRadius: '12px', marginBottom: '1rem' }}>
          <img  src={beer.image_url} alt='a beer' style={{ height: '100px' }} />
          <h3>{beer.name}</h3>
          <h3>{beer.tagline}</h3>
          <h3> Created by : {beer.name}</h3>
          <Link to={`/beers/${beer._id}`} >Details</Link>
        </div>
      ))}

 </div>
    )
}


export default BeerList