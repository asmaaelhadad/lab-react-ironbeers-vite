import React from 'react'
import { useEffect } from 'react'
import {  useParams} from 'react-router-dom'

function Details() {

  const { beerId } = useParams()
 

  return (
     /*useParams() to capture the id from
       URL->  make request with that ID to capture specific beer -> render out the information */  
    <div>
     <h1>  </h1>
     <h1> hello </h1>
     <h1>  </h1>
     <h1>  </h1>
    </div>
  )
}

export default Details
