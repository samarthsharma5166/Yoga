import React from 'react';
import founderImg from '../assets/yogasite.jpg';
// import forewordImg from '../assets/yogasite2.jpg';
import "./CSS/About.css"
const About = () => {
  return (
    <div className="about-container bg-gray-50 py-12 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto container bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-center text-[#2e7d32] mb-6">
          About Us
        </h1>
        <p className="text-center text-gray-600 text-lg mb-10 max-w-3xl mx-auto">
          Welcome to{" "}
          <span className="font-semibold text-[#424242]">YogSaathi</span> — Your
          Companion for Everyday Yoga!
        </p>
        <div className="about-flex">
          <div className="image-box">
            <img src={founderImg} alt="Founder - Sanjay Kumar Mahesh" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[#424242]">
              Founder & CEO - Sanjay Kumar Mahesh
            </h2>
            <p className="text-gray-700">
              B.E. in Mechanical Engineering from IIT Roorkee with 38 years of
              distinguished corporate experience. A passionate yoga enthusiast,
              he is a firm believer in the transformative power of yoga to
              enhance strength, flexibility, and overall well-being. His vision
              is rooted in the belief that yoga is not just a form of exercise,
              but a holistic practice that can help people achieve better
              physical health, mental clarity, and inner balance. Through this
              venture, he aspires to make the benefits of yoga accessible to
              people from all walks of life by making Quality Yoga available at
              their door-step at the price not seen before.
            </p>
          </div>
        </div>

        <div className="about-section">
          <h3 className="text-[#424242]">What Makes YogSaathi Special?</h3>
          <ul>
            <li>
              <strong>✨ Flexible Timings:</strong> 6 convenient time slots
              every day.
            </li>
            <li>
              <strong>✨ Daily Yoga, Year-Round:</strong> 365 days of expert-led
              sessions.
            </li>
            <li>
              <strong>✨ Thoughtful Curriculum:</strong> Asanas for body, mind,
              and balance.
            </li>
            <li>
              <strong>✨ Truly Affordable:</strong> Premium yoga at a price that
              suits every pocket.
            </li>
          </ul>
        </div>

        <div className="vision-flex">
          <div>
            <h3 className="text-[#424242]">Promoted by Experience & Passion</h3>
            <p className="mt-3 text-gray-700">
              YogSaathi is proudly promoted by Sanjay Kumar Mahesh, an IIT
              Roorkee Engineering Graduate with 38 years of rich corporate
              experience. His vision and dedication are the driving forces
              behind this initiative — to spread Yoga and general wellness to
              every corner of society.
            </p>
          </div>
         
        </div>

        <div className="vision-flex">
          <div>
            <h3 className="text-[#424242]">Our Vision & Aim</h3>

            <p className="text-gray-700">
              We are committed to making yoga a part of everyday life...
            </p>
            <p className="mt-3 text-gray-700">
              YogSaathi is here to inspire every household to embrace yoga —{" "}
              <strong>“YogSaathi – together in every asana.”</strong>
            </p>
          </div>
          {/* <div className="image-box">
            <img src={forewordImg} alt="Yoga Practice" />
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default About;
