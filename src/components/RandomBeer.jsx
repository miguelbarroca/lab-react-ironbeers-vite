import React from 'react'
import axios from 'axios'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RandomBeer () {
    const [randomBeer, setRandomBeer] = useState({})
    const {beerId} = useParams()
    console.log(beerId)

  useEffect(() => {
    async function fetchBeer () {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
    setRandomBeer(response.data);
    }
    fetchBeer()
  }, [beerId])

  
  return (
    <div>
        <img style={{ height: "250px" }} src={randomBeer.image_url}></img>
        <p>{randomBeer.name}</p>
        <p>{randomBeer.tagline}</p>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.attenuation_level}</p>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
    </div>
  )
}

export default RandomBeer