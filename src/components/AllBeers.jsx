import React from "react";
import Header from "./Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function AllBeers() {
  const [allBeers, setAllBeers] = useState([]);

 
  const fetchData = async () => {
    const response = await axios.get(
      "https://ih-beers-api2.herokuapp.com/beers"
    );
    setAllBeers(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(allBeers);
  }, [allBeers]);

  return (
    <div className="App">
      <Header />
      <h1>List of all the beers:</h1>
      {allBeers.map((beer) => (
        <div
          style={{
            border: "1px solid white",
            borderRadius: "12px",
            marginBottom: "1rem",
          }}
        >
          <img style={{ height: "250px" }} src={beer.image_url}></img>
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>{beer.contributed_by}</p>
          <Link to={`/beers/${beer._id}`}>Details</Link>
        </div>
      ))}
    </div>
  );
}

export default AllBeers;
