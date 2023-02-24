import React from 'react'
import axios from 'axios'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BeerDetails() {
    const [beerDetails, setBeerDetails] = useState({})
    const {beerId} = useParams()
    console.log(beerId)

  useEffect(() => {
    async function fetchBeer () {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
    setBeerDetails(response.data);
    }
    fetchBeer()
  }, [beerId])

  
  return (
    <div>
        <img style={{ height: "250px" }} src={beerDetails.image_url}></img>
        <p>{beerDetails.name}</p>
        <p>{beerDetails.tagline}</p>
        <p>{beerDetails.first_brewed}</p>
        <p>{beerDetails.attenuation_level}</p>
        <p>{beerDetails.description}</p>
        <p>{beerDetails.contributed_by}</p>
    </div>
  )
}

export default BeerDetails