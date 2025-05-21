import React, { useEffect, useState } from 'react'
import Card from './Card'


const Newsapp = () => {

  const [search, setSearch] = useState("") 
  const [Data , setData] = useState(" ") 

  // const API_KEY = "32da4f27e9194e3fb00421526c3ee4af"

  const getData = async () =>{
      const response = await fetch(`https://mxpertztestapi.onrender.com/api/sciencefiction`) ;
      const jsonData =  await response.json() ;
      console.log(jsonData) ;
      setData(jsonData) ; 
  }

  useEffect(() => {
    getData() 
  } , [])


  const handleInput = (e) =>{
    console.log(e.target.value) ; 
    setSearch(e.target.value) ; 
  }

  const userInput = (e) => {
    setSearch(e.target.value) ; 
  } 
  
  
  return (
    <div>
      <nav>
        <div>
            <h1>BrainyLingo</h1>
        </div>
        <ul>
            <a>Home</a>
            <a>Leaderboard</a>
            <a >Daily Quit</a>
        </ul>
        <div className='searchBar'>
            <input type="text"  placeholder='Search.....' value={ search } onChange={handleInput}/>
            <button onClick={getData}>Search</button>
        </div>
      </nav>
      <div>
        <p className='head'>Science Fiction Stories</p>
      </div>
      <div className='categoryBtn'>
        <button onClick={ userInput } value = "New" >New</button>
        <button onClick={ userInput } value = "in Progress" >in Progress</button>
        <button onClick={ userInput } value = "Completed" >Completed</button>
        <button onClick={ userInput } value = "Clear" >Clear All</button>
      </div>

      <div>

        {Data ? <Card data={Data}/> : ' ' }

      </div>
    </div>
  )
}

export default Newsapp
