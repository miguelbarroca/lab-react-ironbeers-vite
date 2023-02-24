import React from 'react'
import Header from './Header'
import axios from 'axios'
import { useState, useEffect } from "react";

function NewBeer({fetchData}) {
  const [name, setName] = useState('')
  const [tagline, setTagline] = useState('')
  const [description, setDescription] = useState('')
  const [first_brewed, setFirst_brewed] = useState('')
  const [brewers_tips, setBrewers_tips] = useState('')
  const [contributed_by, setContributedBy] = useState('')
  const [attenuation_level, setAttenuation_level] = useState(0)

  const handleSubmit = async event => {
    event.preventDefault()
    const newBeer = { name, tagline, description, first_brewed, brewers_tips, contributed_by, attenuation_level}

    const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
    console.log(response) 
    

    fetchData()

    name('')
    tagline('')
    description('')
    first_brewed('')
    brewers_tips('')
    contributed_by('')
    attenuation_level(0)
  }

  return (
    <>
      <Header />
      <h2>New Beer</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label>
          Name
          <input type='text' value={name} onChange={event => setName(event.target.value)} />
        </label>
        <label>
          Tagline
          <input type='text' value={tagline} onChange={event => setTagline(event.target.value)} />
        </label>
        <label>
          Description
          <input type='text' value={description} onChange={event => setDescription(event.target.value)} />
        </label>
        <label>
          First Brewed
          <input type='text' value={first_brewed} onChange={event => setFirst_brewed(event.target.value)} />
        </label>
        <label>
          Brewer Tips
          <input type='text' value={brewers_tips} onChange={event => setBrewers_tips(event.target.value)} />
        </label>
        <label>
          Contributed By
          <input type='text' value={contributed_by} onChange={event => setContributedBy(event.target.value)} />
        </label>
        <label>
          Attenuation level
          <input
            type='number'
            value={attenuation_level}
            onChange={event => setAttenuation_level(event.target.value)}
            step='0'
          />
        </label>

        <button type='submit'>Create</button>
      </form>
    </>
  )
}

export default NewBeer