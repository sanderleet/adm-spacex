import React from 'react'
import { Link } from 'react-router-dom';
import './NavigationBar.css'

function NavigationBar() {


  return (
    <div className='navbar'>
        <Link to='/' >
          <img src="/images/SpaceX-Logo.svg" alt="" width={150}/>
        </Link>  
    </div>
  )
}

export default NavigationBar