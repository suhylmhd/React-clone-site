import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      
    <div className='d-flex justify-content-center align-items-center w-100 flex-column '>
      
      <div className="footer d-flex justify-content-evenly align-items-center w-100 mt-5 mb-5 text-light">
            <div className='websites' style={{width:'500px'}}>
                <h4>About the Instagram Downloader</h4> 
                <h6 className='d-flex justify-content-center align-items-center mt-4'>Instagram Stories and Highlights downloader. Online Easily with one simple click. Do not need App!</h6>
                <h6 className='d-flex justify-content-center align-items-center mt-3 mb-3'>Simple way to download stories, highlights from Instagram to your PC, MAC or Mobile.</h6>
                <button  class="btn btn-outline-secondary text-light ms-5" style={{width:'150px',height:'50px'}}>Learn More</button>
            </div>
            <div className='links d-flex flex-column'>
            <h4>Contact</h4>
            <p>Address  :   918 Richards Avenue • Modesto, CA 95354 • USA</p>
            <p>Phone  :   (+1) 209-819-5165</p>
            <p>Email  :   info(AT@)storysaver.net</p>
            <div>
                <Link to={"#"} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter rounded fs-2 ms-2"></i></Link>
                <Link to={"#"} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook rounded fs-2 ms-3"></i></Link>
                <Link to={"#"} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram rounded fs-2 ms-3"></i></Link>
                <Link to={"#"} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-github rounded fs-2 ms-3"></i></Link>
            </div>
            </div>
      </div>
        <p className='text-light mt-5'>English - French - Türkçe - Português</p>
    </div>
    </>
  )
}

export default Footer