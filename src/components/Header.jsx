import React from 'react'
import logo from '../Assets/logo.png'

function Header() {
  return (
    <>
        <div className='text-center text-light' style={{marginTop:'100px'}}>
            <img src={logo} alt="" />
            <div className='text-center align-items-center mb-5' style={{marginTop:'200px'}}> 
                <h1>StorySaver.net</h1>
                <h4> Download Instagram Stories, Highlights and Videos Online Easily with one simple click.</h4>
            </div>
        </div>
    </>
  )
}

export default Header