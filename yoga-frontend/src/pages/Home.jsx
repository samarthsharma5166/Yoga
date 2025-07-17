import React, { useEffect, useState, useRef } from "react"; // Import useRef
import "./CSS/Home.css";
import AAImage from "../assets/logo.jpg";
import ABImage from "../assets/yogasite2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mainslider from "../pages/mainslider";
import yogaImage from "../assets/yr.png";
// import medIcon from '../assets/s1.jpg';
// import healthIcon from '../assets/s1.jpg';
// import mindIcon from '../assets/s1.jpg';
import {
  FaRulerCombined,
  FaGrinStars,
  FaBalanceScale,
  FaWind,
  FaBolt,
  FaLightbulb,
  FaShieldAlt,
  FaClock,
  FaMobileAlt,
  FaUsers,
  FaBell,
  FaUserMd,
} from "react-icons/fa";
import { Leaf, HeartPulse, Brain } from "lucide-react"; // Lucide icons
//benifits
import img1 from "../assets/b1.jpg";
import img2 from "../assets/b2.jpg";
import img3 from "../assets/b3.jpg";
import img4 from "../assets/b4.jpg";
import img5 from "../assets/b5.jpg";
import img6 from "../assets/b6.jpg";

import { registerUser } from "../services/api";

const teamMembers = [
  {
    name: "Improved Flexibility and Posture",
    role: "Founder", // 'role' seems to be a leftover from a "team" context, can be ignored or renamed for clarity if not used elsewhere
    image: img1,
  },
  {
    name: "Reduced Stress and Anxiety",
    role: "Creative Director",
    image: img2,
  },
  {
    name: "Enhanced Strength and Balance",
    role: "Lead Developer",
    image: img3,
  },
  {
    name: "Improved Breathing",
    role: "UX Designer",
    image: img4,
  },
  {
    name: "Increased Energy Levels",
    role: "Marketing Manager",
    image: img5,
  },
  {
    name: "Enhanced Mental Focus",
    role: "Product Manager",
    image: img6,
  },
];

const HomePage = () => {
  const [members, setMembers] = useState(0);
  const [years, setYears] = useState(0);
  const [rating, setRating] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);
  const [showRegister, setShowRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });
  const [message, setMessage] = useState("");

  const animateValue = (target, setter, duration) => {
    let start = 0;
    const increment = target / (duration / 10);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setter(target);
      } else {
        setter(parseFloat(start.toFixed(2)));
      }
    }, 10);
  };

  useEffect(() => {
    animateValue(1.18, setMembers, 1200);
    animateValue(12, setYears, 1000);
    animateValue(4.9, setRating, 800);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(formData);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error occurred");
    }
  };

  const founderSlides = [
    {
      img: AAImage,
      name: "Sanjay Kumar Mahesh",
      title: "Founder & CEO",
      desc: "Visionary behind India’s top Yoga movement with 12+ years of experience in building sustainable fitness routines.",
    },
    {
      img: ABImage,
      name: "Sanjay Kumar Mahesh",
      title: "Fitness Expert & Mentor",
      desc: "Empowering millions with his knowledge of yoga, wellness, and mindful living through digital transformation.",
    },
    {
      img: AAImage,
      name: "Sanjay Kumar Mahesh",
      title: "Inspirational Speaker",
      desc: "Recognized for his talks on discipline, productivity, and mental health at global wellness conferences.",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const faqs = [
    {
      question: "How do I join the Class?",
      answer:
        "You can join the class by clicking the link sent to you on WhatsApp. You can join on a mobile or devices such as TV via YouTube. The application is simple and user-friendly.",
    },
    {
      question: "Can I change the Slots as per my convenience?",
      answer:
        "Absolutely yes. For example, you can join a session today at 6 AM, tomorrow at 8:30 AM, and the next day at 6:30 PM as per your convenience. Total six slots are available every day—you can choose any one.",
    },
    {
      question: "Is it possible to join only part of a session?",
      answer:
        "Yes, you can join the program for a shorter period. However, we recommend joining the full session if possible. In case of any urgency, even partial attendance is better than none.",
    },
    {
      question:
        "Can I understand the instructions online and follow them properly?",
      answer:
        "Yes, the instructions are given in Hindi with some English. The pace is moderate, so you can easily follow and do yoga with us.",
    },
    {
      question: "Can I follow the correct postures through online sessions?",
      answer:
        "Yes, yoga is demonstrated by experienced instructors with proper emphasis on correct postures and the right way of doing asanas.",
    },
    {
      question:
        "Are these sessions suitable for beginners or experienced individuals, young or old?",
      answer:
        "These sessions are thoughtfully designed to suit all age groups—beginners as well as experienced yoga practitioners. The selection of asanas ensures wellbeing for all.",
    },
    {
      question:
        "Are extra sessions like Nutritionist included or do I have to pay separately?",
      answer:
        "These sessions are absolutely free and included in your subscription. No extra charges are required.",
    },
  ];

  // yoga benifit section
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoSlideIntervalRef = useRef(null); // Ref to store the interval ID

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const adjustedIndex = (newIndex + teamMembers.length) % teamMembers.length;
    setCurrentIndex(adjustedIndex);

    // Reset auto-slide timer on manual interaction
    resetAutoSlide();

    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  const handleSwipe = (startX, endX) => {
    const swipeThreshold = 50;
    const diff = startX - endX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        updateCarousel(currentIndex + 1);
      } else {
        updateCarousel(currentIndex - 1);
      }
    }
  };

  // Function to start the auto-slide
  const startAutoSlide = () => {
    autoSlideIntervalRef.current = setInterval(() => {
      updateCarousel(currentIndex + 1);
    }, 2000); // 2 seconds
  };

  // Function to clear the auto-slide interval
  const stopAutoSlide = () => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
    }
  };

  // Function to reset the auto-slide (stop and restart)
  const resetAutoSlide = () => {
    stopAutoSlide();
    startAutoSlide();
  };

  // Effect for auto-sliding
  useEffect(() => {
    startAutoSlide(); // Start auto-slide when component mounts

    return () => {
      stopAutoSlide(); // Clear interval when component unmounts
    };
  }, [currentIndex]); // Re-run effect when currentIndex changes to reset the timer

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        updateCarousel(currentIndex - 1);
      } else if (e.key === "ArrowRight") {
        updateCarousel(currentIndex + 1);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isAnimating, updateCarousel]); // Added updateCarousel to dependencies

  let touchStartX = 0;

  return (
    <div className="home-wrapper">
      <Mainslider />
      {/* Trusted Section */}
      <section className="trusted-section">
        <h4 className="subheading">Welcome to Yoga Website</h4>
        <h2 className="main-heading">Trusted by Members Worldwide</h2>
        <p className="description">
          We blend the best of old-school knowledge with modern tricks to help
          you form long-lasting healthy habits.
        </p>
        {/* <div className="stats-box">
          <div className="stat-card">
            <h3>{members.toFixed(2)} Crore +</h3>
            <p>Community Members</p>
          </div>
          <div className="stat-card">
            <h3>{years}+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat-card">
            <h3>{rating}/5</h3>
            <p>Google Rating</p>
          </div>
        </div> */}
      </section>

      {/* Benefits Section - Modified for Auto-slide and Overlay Text */}

      <section className="yoga-join-us">
        <h4 className="yoga-subtitle">Benefits</h4>
        <h2 className="yoga-title">Reasons to Join Us</h2>

        <div className="yoga-card-grid">
          {/* First 4 Benefit Cards */}
          <div
            className="yoga-card yoga-purple"
            data-aos="zoom-in"
            data-aos-delay="0"
          >
            <FaRulerCombined className="yoga-icon" />
            <h4>Improve Flexibility & Posture</h4>
            <ul>
              <li>✓ Enhance Range of Motion</li>
              <li>✓ Correct Body Alignment</li>
              <li>✓ Alleviate Back Pain</li>
            </ul>
          </div>

          <div
            className="yoga-card yoga-red"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <FaGrinStars className="yoga-icon" />
            <h4>Reduce Stress & Anxiety</h4>
            <ul>
              <li>✓ Calm Your Mind</li>
              <li>✓ Promote Relaxation</li>
              <li>✓ Boost Mood</li>
            </ul>
          </div>

          <div
            className="yoga-card yoga-gold"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <FaBalanceScale className="yoga-icon" />
            <h4>Enhance Strength & Balance</h4>
            <ul>
              <li>✓ Build Core Strength</li>
              <li>✓ Improve Stability</li>
              <li>✓ Prevent Falls</li>
            </ul>
          </div>

          <div
            className="yoga-card yoga-light-blue"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <FaWind className="yoga-icon" />
            <h4>Improve Breathing</h4>
            <ul>
              <li>✓ Deepen Respiration</li>
              <li>✓ Increase Lung Capacity</li>
              <li>✓ Optimize Oxygen Flow</li>
            </ul>
          </div>
        </div>

        {/* Separate grid for the 2 centered Benefit Cards */}
        <div className="yoga-card-grid yoga-grid-two-cols">
          <div
            className="yoga-card yoga-dark-green"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <FaBolt className="yoga-icon" />
            <h4>Increase Energy Levels</h4>
            <ul>
              <li>✓ Revitalize Your Body</li>
              <li>✓ Boost Vitality</li>
              <li>✓ Combat Fatigue</li>
            </ul>
          </div>

          <div
            className="yoga-card yoga-pink"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <FaLightbulb className="yoga-icon" />
            <h4>Enhance Mental Focus</h4>
            <ul>
              <li>✓ Improve Concentration</li>
              <li>✓ Sharpen Clarity</li>
              <li>✓ Cultivate Mindfulness</li>
            </ul>
          </div>
        </div>

        <div className="yoga-feature-section">
          <h4 className="yoga-subtitle">Membership Features</h4>
          <h2 className="yoga-title">Unlock Your Exclusive Benefits</h2>

          <div className="yoga-card-grid">
            {/* First 4 Feature Cards */}
            <div
              className="yoga-feature-card"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <FaShieldAlt className="yoga-icon" />
              <span>Accountability Support</span>
            </div>
            <div
              className="yoga-feature-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <FaClock className="yoga-icon" />
              <span>Flexible Timings</span>
            </div>
            <div
              className="yoga-feature-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <FaMobileAlt className="yoga-icon" />
              <span>Easy Accessibility</span>
            </div>
            <div
              className="yoga-feature-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <FaUsers className="yoga-icon" />
              <span>Community Health Programs</span>
            </div>
          </div>
          {/* Separate grid for the 2 centered Feature Cards */}
          <div className="yoga-card-grid yoga-grid-two-cols">
            <div
              className="yoga-feature-card"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <FaBell className="yoga-icon" />
              <span>Habit Tracking Reminders</span>
            </div>
            <div
              className="yoga-feature-card"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <FaUserMd className="yoga-icon" />
              <span>Physiotherapy Support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <p>Start Your Journey</p>
        <h2>Ready for a Change? Begin Your Wellness Journey!</h2>
        <button
          className="cta-button-glow"
          onClick={() => setShowRegister(true)}
        >
          Register Now for FREE →
        </button>
        <p className="cta-note">1.18 Crore + already attended</p>
      </section>

      <div className="divine-wrapper">
        <div className="divine-container">
          <div className="divine-left">
            <img src={yogaImage} alt="Yoga Pose" className="yoga-image" />
          </div>

          <div className="divine-right">
            <h5 className="subheading">RELISH IN NATURE’S NATURAL GIFT</h5>
            <h1 className="main-heading">LIFE IN YOG SAATHI YOGA</h1>

            <p className="desc">
              Have suffered alteration in some form make anything from it of it.
              Randomised words which don’t look even slightly believable.
            </p>
            <p className="desc">
              The word Go also means “light”, so gomukh may refer to the light
              in or of the head, or lightness of the head. The asana gets its
              name because the thighs and calves of the person performing it
              resemble a cow’s face, wide at one end and tapering toward the
              other.
            </p>

            <div className="benefits">
              <div className="benefit-item">
                <Leaf className="benefit-icon" size={40} color="#2b7a0b" />
                <p>
                  <strong>Alternative Medicine</strong>
                </p>
              </div>
              <div className="benefit-item">
                <HeartPulse
                  className="benefit-icon"
                  size={40}
                  color="#d62828"
                />
                <p>
                  <strong>For Good Health</strong>
                </p>
              </div>
              <div className="benefit-item">
                <Brain className="benefit-icon" size={40} color="#1d3557" />
                <p>
                  <strong>Healthy Mind & Body</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showRegister && (
        <div className="register-popup">
          <form
            className="register-form animated-form"
            onSubmit={handleRegister}
          >
            <h2>Register</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
            <button type="submit">Register</button>
            <p>{message}</p>
            <span className="close-btn" onClick={() => setShowRegister(false)}>
              &times;
            </span>
          </form>
        </div>
      )}

      <section className="founders-faqs">
        <h2 className="section-title">Meet Your Habit-Building Founder</h2>

        <Slider {...sliderSettings} className="founder-slider">
          {founderSlides.map((slide, index) => (
            <div key={index} className="founder-slide">
              <img src={slide.img} alt={slide.name} className="founder-img" />
              <h4>{slide.name}</h4>
              <p>{slide.title}</p>
              <small>{slide.desc}</small>
            </div>
          ))}
        </Slider>
        <br/>
        <br/>
        <br/>
        <br/>

      <h5 className="faq-heading">Frequently asked questions</h5>
<div className="faq-container">
  {faqs.map((faq, index) => (
    <div
      key={index}
      className={`faq-item ${openIndex === index ? "open" : ""}`}
      onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
    >
      <div className="faq-question">
        <strong>{faq.question}</strong>
        <span>{openIndex === index ? "-" : "+"}</span>
      </div>
      <p className="faq-answer">
        {faq.answer || "Content coming soon..."}
      </p>
    </div>
  ))}
</div>

      </section>
    </div>
  );
};

export default HomePage;
