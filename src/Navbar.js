import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <div style={{
        backgroundColor: 'black',
        color: 'white',
      }}>
      <h1>Isto é uma navbar</h1>
      </div>
      <div>
      <Link to={"welcomingpage"}> Welcoming Page</Link>
      </div>
      <div>
      <Link to={"recipes"}> Recipes</Link>
      </div>
      
      <Outlet />
      
    </div>
  )
}

export default Navbar;
