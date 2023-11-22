import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
       <Row>
        <Col sm={12} lg={2}></Col>
        <Col className='text-center bg-light' sm={12} lg={8}>
            <div style={{backgroundColor:'white'}} className='mb-5 md-5'>
                <Navbar bg="light" data-bs-theme="light" className='bg-light'>
                    <Nav className="me-auto bg-light">
                        <button class="btn btn-outline-secondary text-light ms-5 bg-light text-dark"><Link className='bg-light text-warning' style={{textDecoration:'none'}}>Download Instagram Stories</Link></button>
                        <button class="btn btn-outline-secondary text-light ms-5 bg-light text-dark"><Link className='bg-light text-warning' style={{textDecoration:'none'}}>Download Instagram Highlights</Link></button>
                        <button class="btn btn-outline-secondary text-light ms-5 bg-light text-dark"><Link className='bg-light text-warning' style={{textDecoration:'none'}}>How To Download Stories</Link></button>
                    </Nav>
                </Navbar>
               
            </div>
            <h2 className='bg-light mb-5' style={{marginTop:'100px',}}><Link className='bg-light text-dark'>Download Instagram Stories</Link></h2>
            <input type="search"   placeholder='Enter instagram account username' className='bg-light rounded w-50' style={{height:'50px'}}/>
            <div className='bg-light mt-5 mb-5'>
            <button className='btn btn-primary' style={{width:'150px',height:'50px'}}>Download!</button>
            </div>

            <div className='bg-light mb-5' style={{marginTop:'100px'}}>
                <button className='btn btn-primary ' style={{width:'300px',height:'50px'}}>Try > Instagram Video Downloader</button>
                <button  class="btn btn-outline-secondary text-dark ms-5" style={{width:'150px',height:'50px'}}>Need Help?</button>
            </div>
            

            <div className='bg-light'>
                <h1 className='bg-light mt-5 mb-5' style={{textDecoration:'underline', color:'violet'}}>How to download stories?</h1>
                <h5 className='bg-light  mb-5'>Download instagram stories or story archive (#highlights)</h5>
            </div>
            <div className='d-flex justify-content-evenly align-items-center w-100 bg-light mb-5 mt-5'>
                <h6 className='bg-light'>1. Enter Instagram user name and click download button</h6>
                <h6 className='bg-light'>2.Select current story or highlights this page</h6>
                <h6 className='bg-light'>3. After click " Save as " button for save your Pc,Phone or Mac</h6>
            </div>
            <div className='bg-light mb-5'>
              <button className='btn btn-primary' style={{width:'150px',height:'50px'}}>Get started</button>
            </div>


            <div  className='bg-light' style={{marginTop:'200px'}}>

                <h5 className='bg-light mb-5'>Questions & Answers</h5>

                <div className='bg-light' >
                    <h3 className='bg-light mb-5'>❓ How can I download stories from Instagram?</h3>

                    <p className='bg-light mb-4'>You can start the next step by typing the Instagram username in the field on the StorySaver.net website.</p>
                    <p className='bg-light mb-4'>Finally, you will see the currently shared stories of the username you entered.</p>
                    <p className='bg-light mb-4'>You can finish the download process successfully by clicking on the download link at the bottom of the page. </p>
                </div>
               
                <div className='bg-light' >
                    <h3 className='bg-light mb-5'>💡 How can I download highlights from Instagram?</h3>

                    <p className='bg-light mb-4'>To be able to download Instagram highlights, the relevant Instagram account must be public.</p>
                    <p className='bg-light mb-4'>For the next step, type the username in the field on the StorySaver.net website and click on Download! link.</p>
                    <p className='bg-light mb-4'>In the next step, a list of the albums created by the highlights of the username you wanted to download from will be created. Once you pick an album on the list, you will be able to see highlighted stories from that album. Finish the download process simply by clicking the link below the story. </p>
                </div>

                <div className='bg-light' >
                    <h3 className='bg-light mb-5'>📱 How to download Instagram Stories on iPhone</h3>

                    <p className='bg-light mb-4'>You can only download Instagram stories on your iPhone using 3rd party downloader apps or Safari web browser. Due to your device's features, downloading can only work on the iOS 13 or higher versions. Visit StorySaver.net and access the download link with a simple click.</p>
                   
                </div>

                <div className='bg-light' >
                    <h3 className='bg-light mb-5'>📲 How to download Instagram Stories on Android</h3>

                    <p className='bg-light mb-4'>You can download your Instagram stories on your Android device using the most stable web browser, Chrome, simply by visiting StorySaver.net. Just follow the necessary steps and save the stories you want to download to your device in seconds.</p>
                   
                </div>

                <div className='bg-light' >
                    <h3 className='bg-light mb-5'>💻 How to download stories on a Windows or Mac Laptop </h3>

                    <p className='bg-light mb-4'>First step is to access StorySaver.net using the recommended up-to-date Google Chrome browser. You can then download stories or highlights by following the steps. You can open downloaded video files using VLC Player.</p>
                   
                </div>

                <div className='bg-light' >
                    <h3 className='bg-light mb-5'>💾 Do you keep a history of the downloaded content?</h3>

                    <p className='bg-light mb-4'>No, The privacy of users personal data is against our philosophy. We do not keep any records, even in any transaction!</p>
                   
                </div>

            </div>
        </Col>
        
        <Col sm={12} lg={2}></Col>
       </Row>

    </>
  )
}

export default Home