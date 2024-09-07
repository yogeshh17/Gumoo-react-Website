import React, {useEffect} from 'react'
import './main.css'
import './main.scss'

import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiOutlineClipboardCheck } from 'react-icons/hi';

import img1 from '../../Assests/img1.jpg' 
import img2 from '../../Assests/img2.jpg' 
import img3 from '../../Assests/img3.jpg' 
import img4 from '../../Assests/img4.jpg' 
import img5 from '../../Assests/img5.jpg' 

import aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc: img1,
    destTitle:'Bora Bora',
    location:'New Zealand',
    grade: 'CULTURAL RELAX',
    fees:'Rs. 5000',
    description: 'Governments around the world have implemented similar health certificates in response to the coronavirus pandemic. The contact details and travel information provided can be used to more effectively track overseas visitors and minimize infection rates.After registering their details with the online Philippines eTravel system, travelers are issued with a reference number and barcode which they will be required to present on arrival.'
  },

  {
    id:2,
    imgSrc: img2,
    destTitle:'Bora Bora',
    location:'New Zealand',
    grade: 'CULTURAL RELAX',
    fees:'Rs. 6000',
    description: 'Governments around the world have implemented similar health certificates in response to the coronavirus pandemic. The contact details and travel information provided can be used to more effectively track overseas visitors and minimize infection rates.After registering their details with the online Philippines eTravel system, travelers are issued with a reference number and barcode which they will be required to present on arrival.'
  },

  {
    id:3,
    imgSrc: img3,
    destTitle:'Mochu Picchu',
    location:'Peru',
    grade: 'CULTURAL RELAX',
    fees:'Rs. 7000',
    description: 'Governments around the world have implemented similar health certificates in response to the coronavirus pandemic. The contact details and travel information provided can be used to more effectively track overseas visitors and minimize infection rates.After registering their details with the online Philippines eTravel system, travelers are issued with a reference number and barcode which they will be required to present on arrival.'
  },

  {
    id:4,
    imgSrc: img4,
    destTitle:'Great Barrier Reef',
    location:'Australia',
    grade: 'CULTURAL RELAX',
    fees:'Rs. 1000',
    description: 'Governments around the world have implemented similar health certificates in response to the coronavirus pandemic. The contact details and travel information provided can be used to more effectively track overseas visitors and minimize infection rates.After registering their details with the online Philippines eTravel system, travelers are issued with a reference number and barcode which they will be required to present on arrival.'
  },
  {
    id:5,
    imgSrc: img5,
    destTitle:'coppadocia',
    location:'Turkey',
    grade: 'CULTURAL RELAX',
    fees:'Rs. 3000',
    description: 'Governments around the world have implemented similar health certificates in response to the coronavirus pandemic. The contact details and travel information provided can be used to more effectively track overseas visitors and minimize infection rates.After registering their details with the online Philippines eTravel system, travelers are issued with a reference number and barcode which they will be required to present on arrival.'
  },
  {
    id:6,
    imgSrc: img1,
    destTitle:'Guanajuato',
    location:'Mexico',
    grade: 'CULTURAL RELAX',
    fees:'Rs. 8000',
    description: 'Governments around the world have implemented similar health certificates in response to the coronavirus pandemic. The contact details and travel information provided can be used to more effectively track overseas visitors and minimize infection rates.After registering their details with the online Philippines eTravel system, travelers are issued with a reference number and barcode which they will be required to present on arrival.'
  },
  {
    id:7,
    imgSrc: img2,
    destTitle:'Angkor Wat',
    location:'Combodia',
    grade: 'CULTURAL RELAX',
    fees:'Rs. 7000',
    description: 'Governments around the world have implemented similar health certificates in response to the coronavirus pandemic. The contact details and travel information provided can be used to more effectively track overseas visitors and minimize infection rates.After registering their details with the online Philippines eTravel system, travelers are issued with a reference number and barcode which they will be required to present on arrival.'
  },
  {
    id:8,
    imgSrc: img3,
    destTitle:'Andman and Nicobar',
    location:'India',
    grade: 'CULTURAL RELAX',
    fees:'Rs. 2000',
    description: 'Governments around the world have implemented similar health certificates in response to the coronavirus pandemic. The contact details and travel information provided can be used to more effectively track overseas visitors and minimize infection rates.After registering their details with the online Philippines eTravel system, travelers are issued with a reference number and barcode which they will be required to present on arrival.'
  },

  {
    id:9,
    imgSrc: img4,
    destTitle:'Bali Island',
    location:'Indonesia',
    grade: 'CULTURAL RELAX',
    fees:'Rs. 4000',
    description: 'Governments around the world have implemented similar health certificates in response to the coronavirus pandemic. The contact details and travel information provided can be used to more effectively track overseas visitors and minimize infection rates.After registering their details with the online Philippines eTravel system, travelers are issued with a reference number and barcode which they will be required to present on arrival.'
  }
]

const Main = () => {

  // hook for scroll animation
useEffect(()=>{
  aos.init({duration:2000})
},[])

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="Title">
          Most Visited Destinations
        </h3>
      </div>

     <div className="secContent grid">
         {
          Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
             return(
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className='continent flex'>
                    <HiOutlineLocationMarker className='icon'/>
                    <span className='name'>{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>  +1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                       DETAILS <HiOutlineClipboardCheck className="icon"/>
                  </button>
                </div>
              </div>
             )
          })
         }

     </div>

    </section>
  )
}

export default Main