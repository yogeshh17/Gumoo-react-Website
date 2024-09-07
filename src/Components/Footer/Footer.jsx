import React, {useEffect} from 'react'
import './footer.css'
import './footer.scss'

import video from '../../Assests/video.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { FaTripadvisor } from 'react-icons/fa'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'

import aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

// hook for scroll animation
useEffect(()=>{
  aos.init({duration:2000})
},[])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted typeof='video/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div data-aos="fade-up" className="inputDiv flex">
            <input type="text"  placeholder='Enter Your Email Address'/>
            <button data-aos="fade-up" className='btn flex' type='submit'>SEND<FiSend className='icon'/></button>
          </div>

        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
              <MdOutlineTravelExplore className="icon" /> Gumoo.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
            Travelers are advised to submit the health certificate electronically before departure in order to avoid being held up at immigration.Anyone who arrives at the port of entry or departure without having previously completed the application will be required to do so electronically before crossing the border or boarding a flight leaving the Philippines.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillInstagram className='icon'/>
              <FaTripadvisor className='icon'/>
            </div>
          </div>

          <div className="footerLinks grid">
          {/* Group One */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/> Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/> Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/> Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/> Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/> Payment
              </li>

            </div>

             {/* Group TWO */}
             <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
               PRTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/> Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/> RentCars
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/> HotelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/> MakeMyTrip
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>Trivagoo
              </li>

            </div>

              {/* Group three */}
             <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/> London
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/> Indonesia
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/> Argentina
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/> Europe
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/> Paris
              </li>

            </div>

          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHT RESERVED - YOGESH PATIDAR</small>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Footer