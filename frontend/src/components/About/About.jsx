import React from 'react';
import aboutImg from "../../assets/images/about.png";
import { Link } from "react-router-dom"

const About = () => {
    return (
        <section>
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center justify-around gap-[50px] lg:gap-[130px] xl:gap-0">
                    <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 text-center lg:text-left">
                        <h2 className="heading">
                            Track Your Pregnancy Journey
                        </h2>
                        <p className="text__para">
                            Stay informed and prepared throughout your pregnancy with our comprehensive Maternity Calendar. For 30 years, we have been dedicated to providing top-notch care and support. Our Maternity Calendar offers week-by-week information and guidance, ensuring you know what to expect at every stage. Explore essential tips, health advice, and developmental milestones, all tailored to your unique journey.
                        </p>

                        <p className="text__para mt-[30px]">
                            Stay on top of your health and your baby's development with our expertly curated resources. Click the button below to access your personalized Maternity Calendar and start your journey to a healthy, informed pregnancy.
                        </p>
                        <Link to="/maternity-calendar">
                            <button className="btn">
                                Learn More
                            </button>
                        </Link>
                    </div>
                    <div className="relative w-full lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 flex justify-center">
                        <img src={aboutImg} className="w-80" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About
