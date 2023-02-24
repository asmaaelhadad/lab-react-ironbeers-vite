import { useState } from 'react'
import  Home from './Components/Home'
import './App.css'
import {Routes ,Route} from 'react-router-dom'
import AllBeers from './Components/Allbeers'
import RandomBeer from './Components/RandomBeer'
import NewBeer from './Components/NewBeer'
import Details from './Components/Details'
function App() {
  
   return (
    <div className="App">
     <Routes>
<Route path ='/' element = { <Home/>} />
<Route path ='/beers' element = { <AllBeers/>} />
<Route path ='/random' element = { <RandomBeer/>} />
<Route path ='/new' element = { <NewBeer/>} />
<Route path ='/beers/:beerId' element = { <Details/>} />
</Routes> 
  </div>
         )  }

export default App
