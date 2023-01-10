import React from 'react'

import { BsFacebook, BsTelephoneFill , BsLinkedin, BsTwitter, BsInstagram} from 'react-icons/bs';
import {MdLocationOn , MdMailOutline} from 'react-icons/md';
import {AiOutlineArrowRight} from 'react-icons/ai';
import Logo from '../../assets/Logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="col">
                    <div>
                <img className='footer-img' src={Logo} alt="logo" />
                </div> 
                    {/* <h4> MUO INVESTMENTS</h4> */}
                    <div className='footer__socials'>
                    <a href="https://linkedin.com" target='_blank' rel='noreferrer noopener'><BsLinkedin/></a>
 <a href="https://facebook.com" target='_blank' rel='noreferrer noopener'>< BsFacebook/></a>
 <a href="https://twitter.com" target='_blank' rel='noreferrer noopener'><BsTwitter/></a>
 <a href="https://instagram.com" target='_blank' rel='noreferrer noopener'><BsInstagram/></a>
</div>
                </div>
                <div className="col">
                    <h4>QUICK NAVIGATION</h4>
          <p><a href='/about'> {<AiOutlineArrowRight fontSize='small'/>} About</a></p>
          <p> <a href='/services'> {<AiOutlineArrowRight fontSize='small'/>}Services</a></p>
          <p><a href='/contact'> {<AiOutlineArrowRight fontSize='small'/>}Contact</a></p>
                </div>
                <div className="col">
                    <h4>GET IN TOUCH</h4>
                      <p>{<MdLocationOn/>} 16 Apiesdoring drive, Heuweloord, Centurion, 0157 </p>
 <p>{< BsTelephoneFill/>} 083 960 0349 </p> 
 <p>{<MdMailOutline/>} info@muoinvest.co.za </p>
                </div>


           
            </div>

            <div className='footer__copyright'>
 <small>2022 MUO INVESTMENTS &copy; All Rights Reserved</small>
      </div>
        </div>
    )
}

export default Footer


// import React from 'react';
// import  {Link} from 'react-router-dom';
// import { BsFacebook, BsTelephoneFill , BsLinkedin, BsTwitter, BsInstagram} from 'react-icons/bs';
// import {MdLocationOn , MdMailOutline} from 'react-icons/md';
// import {AiOutlineArrowRight} from 'react-icons/ai';
// import Logo from '../../assets/Logo.png'
// import './Footer.css'

// const Footer = () => {
//     return (
//         <footer>
//     <div className='container footer__container'>
//       <article>
//         <Link to='/' className='logo'>
//           <img src={Logo} alt="Footer Logo" />
// <h4>MUO Investments</h4>
// <div className='footer__socials'>
// <a href="https://linkedin.com" target='_blank' rel='noreferrer noopener'><BsLinkedin/></a>
// <a href="https://facebook.com" target='_blank' rel='noreferrer noopener'>< BsFacebook/></a>
// <a href="https://twitter.com" target='_blank' rel='noreferrer noopener'><BsTwitter/></a>
// <a href="https://instagram.com" target='_blank' rel='noreferrer noopener'><BsInstagram/></a>
// </div>
//         </Link>
//       </article>


//       <article>
//       <h3>Quick Navigation </h3>
//       <Link to='/about'> {<AiOutlineArrowRight fontSize='small'/>} About</Link>
//       <Link to='/services'> {<AiOutlineArrowRight fontSize='small'/>}Services</Link>
//       <Link to='/contact'> {<AiOutlineArrowRight fontSize='small'/>}Contact</Link>
//       </article>

//       <article>
//       <h3>Get In Touch</h3>
//  <p>{<MdLocationOn/>} 16 Apiesdoring drive, Heuweloord, Centurion, 0157 </p>
//  <p>{< BsTelephoneFill/>} 083 960 0349 </p> 
//  <p>{<MdMailOutline/>} info@muoinvest.co.za </p>
  
//       </article>

//        </div>
      
//       <div className='footer__copyright'>
// <small>2022 MUO INVESTMENTS &copy; All Rights Reserved</small>
//       </div>
//       </footer>
//     )
// }

// export default Footer