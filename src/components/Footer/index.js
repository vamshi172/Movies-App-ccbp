import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-con">
    <div className="icon-con">
      <FaGoogle className="icons" />
      <FaTwitter className="icons" />
      <FaInstagram className="icons" />
      <FaYoutube className="icons" />
    </div>
    <p className="contact-us">Contact us</p>
  </div>
)

export default Footer
