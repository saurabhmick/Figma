import React from 'react'
import '../App.css';
import './assests/css/style.css';
import About from './About';
function Navbar() {
  return (
    <div className='main'>
      <Header />
      <About/>
    </div>
  )
}
function Header() {
  return <div className='App-header1'>
    <ul className='list-group'>
      <li className="list-items"><a>Home</a></li>
      <li className="list-items"><a>About</a></li>
      <li className="list-items"><a>Contact us </a></li>
      <li className="list-items" id="#service"><a href="#service">Services </a></li>
      <li className="list-items"><a>FAQ </a></li>
      <li className="list-items"><a>Home</a></li>
      <li className="list-items"><a>About</a></li>
      <li className="list-items"><a>Contact us </a></li>
      <li className="list-items"><a>Services </a></li>
      <li className="list-items"><a>FAQ </a></li>

    </ul>

  </div>
}

export default Navbar;