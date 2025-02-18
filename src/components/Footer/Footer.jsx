import React from 'react'
import "./Footer.scss"
import facebook from "../../assets/Icons/facebook.svg";
import twitter from "../../assets/Icons/X_twitter.svg";
import instagram from "../../assets/Icons/instagram.svg";
import pinterest from "../../assets/Icons/pinterest.svg";


function Footer() {
  return (
    <>
    <div className="footer-main">
      <div className="left">
        <div className="wordmark">
          <a href="/" className='wordmark-title'>Snaps</a>
        </div>  
        <div className="links">
          <div className="links-left">
            <p className='link'>For photographers</p>
            <p className='link'>Hire Talent</p>
            <p className='link'>Inspiration</p>
          </div>
          <div className="links-right">
            <p className='link'>About</p>
            <p className='link'>Careers</p>
            <p className='link'>Support</p>
          </div>
        </div> 
      </div>
      <div className="right">
          <a href="https://www.facebook.com/"><img src={facebook} alt="Facebook"/></a>
          <a href="https://x.com/"><img src={twitter} alt="twitter"/></a>
          <a href="https://www.instagram.com/"><img src={instagram} alt="instagram"/></a>
          <a href="https://ca.pinterest.com/"><img src={pinterest} alt="pinterest"/></a>
      </div>
    </div>
    <div className="copyright">
      <p>© 2024 Snaps</p>
      <p>Terms</p>
      <p>Privacy</p>
      <p>Cookies</p>
    </div>
    </>
  )
}

export default Footer