import React from 'react'
import { Link, useLocation } from 'react-router-dom'
function Navbar() {
  const location=useLocation();
    return (
    <nav>
        <Link to='/'><img src='https://fontmeme.com/permalink/230927/6970201504bb251915bfbd431552a199.png' width={150}/></Link>
       
        <Link  className={`link ${location.pathname==='/' ? 'active': ''}`} to='/'>Movies</Link>
        <Link className={`link ${location.pathname==='/favorite' ? 'active':''}`} to='/favorite'>My Favorites</Link>
    </nav>
  )
}

export default Navbar