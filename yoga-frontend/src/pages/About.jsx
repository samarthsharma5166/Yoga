import React from 'react';
import founderImg from '../assets/yogasite.jpg';
import forewordImg from '../assets/yogasite2.jpg';
import "./CSS/About.css"
const About = () => {
  return (
    <div className="about-container bg-gray-50 py-12 px-6 sm:px-12">
  <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-md">
    <h1 className="text-4xl font-bold text-center text-teal-700 mb-6">About Us</h1>
    <p className="text-center text-gray-600 text-lg mb-10 max-w-3xl mx-auto">
      Welcome to <span className="font-semibold text-teal-600">YogSaathi</span> — Your Companion for Everyday Yoga!
    </p>
    <div className="about-flex">
      <div className="image-box">
        <img
          src={founderImg}
          alt="Founder - Sanjay Kumar Mahesh"
        />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Founder & CEO - Sanjay Kumar Mahesh</h2>
        <p className="text-gray-700">
          B.E. in Mechanical Engineering from <strong>IIT Roorkee</strong> with 38 years of distinguished corporate experience...
        </p>
        <p className="mt-3 text-gray-700">
          Through this venture, he aims to make high-quality yoga accessible at affordable prices...
        </p>
      </div>
    </div>

    <div className="about-section">
      <h3>What Makes YogSaathi Special?</h3>
      <ul>
        <li><strong>✨ Flexible Timings:</strong> 6 convenient time slots every day.</li>
        <li><strong>✨ Daily Yoga, Year-Round:</strong> 365 days of expert-led sessions.</li>
        <li><strong>✨ Thoughtful Curriculum:</strong> Asanas for body, mind, and balance.</li>
        <li><strong>✨ Truly Affordable:</strong> Premium yoga at a price that suits every pocket.</li>
      </ul>
    </div>
    <div className="vision-flex">
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision & Aim</h3>
        <p className="text-gray-700">
          We are committed to making yoga a part of everyday life...
        </p>
        <p className="mt-3 text-gray-700">
          YogSaathi is here to inspire every household to embrace yoga — <strong>“YogSaathi – together in every asana.”</strong>
        </p>
      </div>
      <div className="image-box">
        <img
          src={forewordImg}
          alt="Yoga Practice"
        />
      </div>
    </div>
  </div>
</div>

  );
};
export default About;
