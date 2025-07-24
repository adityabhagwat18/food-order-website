import React,{useRef} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

function Customer() {
    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        nextArrow: <FaChevronCircleRight />,
        prevArrow: <FaChevronCircleLeft  />
      };
  return (
    <div>
        <h1 className='mt-5' style={{fontFamily:"brush script mt"}}>What Says Our Customers</h1>
        <div className="slider-container">
      <Slider  ref={slider => {
          sliderRef = slider;
        }} {...settings}>
        <div className='p-4'>
            <div  className='bg-dark text-white p-3'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          <h5>Moana Michell</h5>
          <p>magna aliqua</p>
          </div>
          <img src="./images/client1.jpg" alt="Moana" className='img-fluid d-block mx-auto rounded-circle mt-3 border border-warning h-25 w-25 float-start' />
        </div>
        <div className='p-4'>
        <div  className='bg-dark text-white p-3'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          <h5>Mike Hamell</h5>
          <p>magna aliqua</p>
          </div>
          <img src="./images/client2.jpg" alt="Moana" className='img-fluid d-block mx-auto rounded-circle mt-3 border border-warning border-4 h-25 w-25 float-start' />
        </div>
        
        <div className='p-4'>
        <div  className='bg-dark text-white p-3'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          <h5>Moana Michell</h5>
          <p>magna aliqua</p>
          </div>
          <img src="./images/client1.jpg" alt="Moana" className='img-fluid d-block mx-auto rounded-circle mt-3 border border-warning border-4 h-25 w-25 float-start' />
        </div>
       
        <div className='p-4'>
        <div  className='bg-dark text-white p-3'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          <h5>Moana Michell</h5>
          <p>magna aliqua</p>
          </div>
          <img src="./images/client2.jpg" alt="Moana" className='img-fluid d-block mx-auto rounded-circle mt-3 border border-warning border-4 h-25 w-25 float-start' />
        </div>
        
       
      </Slider>
      
      <FaChevronCircleLeft  className='fs-1 text-warning me-2' onClick={previous}/>
        <FaChevronCircleRight className='text-warning fs-1' onClick={next}/>
    </div>
    </div>
  )
}

export default Customer