import React from 'react'
import heroImg01 from "../assets/images/hero-img01.png"
import icons1 from "../assets/images/icon01.png"
import icons2 from "../assets/images/icon02.png"
import icons3 from "../assets/images/icon03.png"
import FeatureImg from "../assets/images/feature-img.png"
import videoIcon from "../assets/images/video-icon.png"
import avatarIcon from "../assets/images/avatar-icon.png"
import faqimg from "../assets/images/faq-img.png"
import { Link } from 'react-router-dom'
import About from '../components/About/About'
import ServiceList from '../components/Services/ServiceList'
import DoctorList from '../components/Doctors/DoctorList'
import FaqList from '../components/Faq/FaqList'
import Testimonial from '../components/Testimonial/Testimonial'

const Home = () => {
  return (
    <>
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
                  Empowering Mothers for a Healthier Journey
                </h1>
                <p className="text__para">
                  Discover a comprehensive maternity support app designed to ensure a healthy and joyful journey for expecting mothers. Stay connected with your doctor through video calls and access tailored content to guide you every step of the way. We are committed to helping you live a healthy, longer life.
                </p>
                <button className="btn">
                  Chat Now
                </button>
              </div>

              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                    30+
                  </h2>
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'>

                  </span>
                  <p className="text__para">
                    Years of Experience
                  </p>
                </div>

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                    15+
                  </h2>
                  <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'>

                  </span>
                  <p className="text__para">
                    Accessible Locations Globally
                  </p>
                </div>

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                    100%
                  </h2>
                  <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'>

                  </span>
                  <p className="text__para">
                    Patient Satisfaction
                  </p>
                </div>

              </div>
            </div>

            <div className='flex gap-[30px] justify-end'>
              <div>
                <img src={heroImg01} className="rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              Providing the best medical services
            </h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health system offeres unmatched, expert health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className='py-[30px] px-5'>
              <div className="flex items-center justify-center">
                <img src={icons1} alt="" />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Find a Doctor
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Connect with experienced maternity specialists dedicated to providing personalized care and support. Our network of experts is here to guide you through every stage of your pregnancy.
                </p>
              </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className="flex items-center justify-center">
                <img src={icons2} alt="" />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Virtual Consultations
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Access top-notch maternity care from the comfort of your home. Our app connects you with healthcare professionals for virtual checkups, consultations, and advice, ensuring you receive the best care without needing to visit a clinic.

                </p>
              </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className="flex items-center justify-center">
                <img src={icons3} alt="" />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Book an Appointment
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Schedule virtual appointments with your healthcare providers effortlessly. Our app makes it simple to find the right time for online consultations, ensuring you receive the care and attention you need.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <About />

      <section>
        <div className="container">
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              Our medical Services
            </h2>
            <p className='text__para text-center'>
              World-class care for every mother. Our health system offers unmatched, expert health care.
            </p>
          </div>
        </div>

        <ServiceList />


      </section>

      {/* services */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className='xl:w-[670px]'>
              <h2 className="heading">
                Get virtual meeting <br />
                Anytime.
              </h2>

              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule a virtual consultation with your healthcare provider.
                </li>
                <li className="text__para">
                  2. Connect with a maternity specialist through our real-time chat feature.
                </li>
                <li className="text__para">
                  3. Use the personalized AI assistant to get tailored advice and reminders for your pregnancy journey.
                </li>
              </ul>
              <Link to="/call">
                <button className="btn">
                  Learn More
                </button>
              </Link>
            </div>

            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={FeatureImg} className="w-3/4" alt="" />

              <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:pb-[26px] rounded-[10px]'>
                <div className="flex items-center justify-between">
                  <div className='flex items-center gap-[6px] lg:gap-3'>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
                      Tue, 24
                    </p>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
                      10:00 AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full'>
                  Consultation
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700]'>
                    Hargun Kaur
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* doctors */}
      <section>
        <div className="container">
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              Our great doctors
            </h2>
            <p className='text__para text-center'>
              World-class care for every mother. Our health system offers unmatched, expert health care.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>

      {/* faq section */}
      <section>
        <div className="container">
          <div className="flex justify-around gap-[50px] lg:gap-0">
            <div className='w-80 hidden md:flex justify-center items-center'>
              <img src={faqimg} className="rounded-xl" />
            </div>


            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most questions by our beloved patients
              </h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section>
        <div className="container">
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              What our patients say
            </h2>
            <p className='text__para text-center'>
              World-class care for every mother. Our health system offers unmatched, expert health care.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  )
}

export default Home
