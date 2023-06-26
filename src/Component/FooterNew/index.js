import React from 'react'
import './footerNew.css'
import { Container } from 'react-bootstrap'
import SMDw from "../../Images/logo-sms.png";
import email from "../../Images/email.png";
import pin from "../../Images/pin.png";
import telp from "../../Images/telp.png";

const FooterNew = () => {
  return (
    <div className='bg-navy footer-outer'>
        <Container>
            <div className='footer-wr'>
                <div className='footer-logo'>
                 <img src={SMDw}></img>

                </div>
                <div className='footer-cont'>
                    <h1>Get in Touch with Us!</h1>
                    <hr className='footer-hr'></hr>
                    <div className='row footer-child'>
                        <div className='col-md-3 child-1'>
                            <h3><b>CV. SINAR MEDIA SAKTI</b></h3>
                        </div>
                        <div className='col-md child-2'>
                            <h3>
                                <span className='wr-span'>
                                    <img src={pin}></img> Jl. Aria Putra No. 8 RT 01 / RW 06 Kel. Sarua Indah, Kec. Ciputat, Tangerang Selatan 15414
                                </span>
                            </h3>
                        </div>
                        <div className='col-md child-3'>
                            <h3>
                                <span className='wr-span wr-telp'>
                                    <img src={telp}></img> 
                                    <p>021 - 74634075/ 021 - 74633530</p>
                                </span>
                            </h3>
                            <h3>
                                <span className='wr-span'>
                                    <img className="footer-email" src={email}></img> bagus.sms@gmail.com <br></br> sinarmediasakti.adv@gmail.com
                                </span>
                            </h3>
                        </div>
                    </div>  
                </div>
            </div>
        </Container>
    </div>
  )
}

export default FooterNew