import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import AllBeers from './components/AllBeers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import BeerDetails from './components/BeerDetails';
import './App.css'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/beers' element={<AllBeers/>}/>
        <Route path='new-beer' element={<NewBeer/>}/>
        <Route path='random-beer' element={<RandomBeer/>}/>
        <Route path='/beers/:beerId' element = {<BeerDetails allBeers={AllBeers}/>} />
        <Route path='*' element={'Error 404: Not Found'}/>
        </Routes>
    </div>
  );
}

export default App
