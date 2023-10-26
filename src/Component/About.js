import React from 'react';
import logo from '../logo.svg';
import Services from './Services';
import Footer from './Footer';
function About() {
  return (
    <div className='bg-dark'>
        <div className='container-fluid  py-2'>
            <div className='d-flex justify-content-evenly about_us text-white mb-2'>
                <div className='w-50'>
                    <img src={logo} alt='first'/>
                    <span className='align-items-center'>Refrigrator Service </span>
                </div>
                <div className='w-50'>
                <img src={logo} className='' alt='first'/>
                    <span>AC Service </span>
                </div>
            </div>
            <div className='d-flex justify-content-evenly about_us text-white mb-2'>
                <div className='w-50'>
                    <img src={logo}  className='' alt='first'/>
                    <span className='align-items-center'>Refrigrator Service </span>
                </div>
                <div className='w-50'>
                <img src={logo} alt='first'/>
                    <span>AC Service </span>
                </div>
            </div>
            <div className='d-flex justify-content-evenly about_us text-white'>
                <div className='w-50'>
                    <img src={logo} alt='first'/>
                    <span className='align-items-center'>Refrigrator Service </span>
                </div>
                <div className='w-50'>
                <img src={logo} alt='first'/>
                    <span>AC Service </span>
                </div>
            </div>
        </div>        
        <Services/>
        
        
</div>
  )
}

export default About