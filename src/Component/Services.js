import React from 'react'
import Contact from './Contact'

function Services() {
  return (
    <div className='text-white  bg-secondary' id="service">
        <ul>
            <li className="px-1 py-1"><a>Refrigrator Service </a></li> 
            <li className="px-1 py-1"><a>AC  Service </a></li> 
            <li className="px-1 py-1"><a>Geaser Service </a></li> 
            <li className="px-1 py-1"><a>Iron Service </a></li> 
            <li className="px-1 py-1"><a>Fan & Cooler Service </a></li> 
        </ul>
        <Contact/>
    </div>
  )
}

export default Services