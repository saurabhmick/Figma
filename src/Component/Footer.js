import React from 'react'
import logo from '../logo.svg';
function Footer() {
  return (
    <div className='container-fluid bg-dark  '> 
        <div className='footer-widget d-flex justify-content-between align-items-center'>
            <div className='social-links'>
                <ul className='d-flex list-style-none align-items-center mt-1 mb-1'>
                    <li><a><img src={logo} width="50" className='App-logo' height="30"/></a></li>
                    <li><a><img src={logo} width="50" className='App-logo1' height="30"/></a></li>
                    <li><a><img src={logo} width="50"   className='App-logo' height="30"/></a></li>
                </ul>

            </div>
            <div className='footer-text text-white'>
            <span>&copy; 2023-2024 All Rights are Reserved </span>
            </div>
            <div className='company-title align-items-center'>
                <span className='text-white'>AG TECHNOLOGY</span>
            </div>
        </div>
    </div>
  )
}

export default Footer