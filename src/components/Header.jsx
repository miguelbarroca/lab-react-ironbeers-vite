import React from 'react'
import { Link } from "react-router-dom";


function Header() {
  return (
    <div style={{backgroundColor: 'lightblue', padding: '5px'}}>
      <Link to={'/'}>🏚️</Link>
        <p></p>
    </div>
  )
}

export default Header