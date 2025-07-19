import React, { useEffect, useState, useRef } from "react";
import "./CSS/Home.css";
import AAImage from "../assets/logo.jpg";
import ABImage from "../assets/yogasite2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mainslider from "../pages/mainslider";
import yogaImage from "../assets/yr.png";
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
import { Leaf, HeartPulse, Brain } from "lucide-react";
import img1 from "../assets/b1.jpg";
import img2 from "../assets/b2.jpg";
import img3 from "../assets/b3.jpg";
import img4 from "../assets/b4.jpg";
import img5 from "../assets/b5.jpg";
import img6 from "../assets/b6.jpg";

import { registerUser } from "../services/api";
import { MdOutlineFreeBreakfast } from "react-icons/md";

const teamMembers = [
  {
    name: "Improved Flexibility and Posture",
    role: "Founder",
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
      img: ABImage,
      name: "Sanjay Kumar Mahesh",
      title: "Founder & CEO",
      desc: "An IIT Roorkee graduate with a B.E. in Mechanical Engineering and 38 years of corporate experience, Sanjay Kumar Mahesh is a passionate yoga advocate committed to making quality yoga accessible to all. He believes yoga is more than just fitness—it’s a path to physical vitality, mental clarity, and inner balance. With a vision to bring transformative wellness to every doorstep, he leads India’s top yoga movement, blending tradition with convenience like never before.",
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

  const trainers = [
    {
      name: "Ms. Upma Kumari",
      about:
        "Certificate from Yoga Certification Board, Ministry of AYUSH, Government of India, Diploma in Naturopathy and Yoga, MA – Science of Living, Preksha Meditation & Yoga,  having more than 15 Years Experience of imparting Yoga Training.",
      image: "./teacher1.jpg",
    },
    {
      name: "Ankita Kwatra",
      about:
        "Certificate from Yoga Certification Board, Ministry of AYUSH, Government of India; Level 1 Teacher Training 200 Hours Certificate; Advanced Pranayama Teacher Training – Ananda Yoga School; Level 1 Master Practitioner Training in Sound Healing; having  8  Years of Experience of imparting Yoga Training.",
      image: "./teacher2.jpg",
    },
    {
      name: "Aniket Saini",
      about:"Masters in Yogic Science, Gurukul Kangdi, Haridwar, having 6 Years of Experience of imparting Yoga Training, including 6 months Yoga teaching at Vietnam. ",
      image: "./teacher3.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoSlideIntervalRef = useRef(null);

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const adjustedIndex = (newIndex + teamMembers.length) % teamMembers.length;
    setCurrentIndex(adjustedIndex);

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

  const startAutoSlide = () => {
    autoSlideIntervalRef.current = setInterval(() => {
      updateCarousel(currentIndex + 1);
    }, 2000);
  };

  const stopAutoSlide = () => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
    }
  };

  const resetAutoSlide = () => {
    stopAutoSlide();
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [currentIndex]);

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
  }, [currentIndex, isAnimating]);

  let touchStartX = 0;

  // free registration section start
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1000); // Animation duration
    }, 5000); // Every 5 seconds

    return () => clearInterval(interval);
  }, []);
  // end

  return (
    <div className="home-wrapper">
      <Mainslider />
      {/* <section className="trusted-section"> */}
      {/* <h4 className="subheading">Welcome to Yoga Website</h4>
        <h2 className="main-heading">Trusted by Members Worldwide</h2>
        <p className="description">
          We blend the best of old-school knowledge with modern tricks to help
          you form long-lasting healthy habits.
        </p> */}
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
      {/* </section> */}

      <section className="yoga-join-us">
        <h4 style={{ color: "black" }} className="yoga-subtitle">
          Benefits
        </h4>
        <h2 style={{ color: "black" }} className="yoga-title">
          Reasons to Join Us
        </h2>
        <div className="yoga-card-grid">
          <div
            className="yoga-card 	bg-[#E0F7FA] space-y-4"
            data-aos="zoom-in"
            data-aos-delay="0"
          >
            <div className="flex justify-center">
              <FaRulerCombined
                style={{ color: "#4CAF50" }}
                className="yoga-icon"
              />
            </div>
            <h4
              style={{ color: "black" }}
              className="text-center font-bold w-full"
            >
              Improve Flexibility & Posture
            </h4>
            <ul>
              <li style={{ color: "black" }}>Enhance Range of Motion</li>
              <li style={{ color: "black" }}>Correct Body Alignment</li>
              <li style={{ color: "black" }}>Alleviate Back Pain</li>
            </ul>
          </div>

          <div
            className="yoga-card bg-[#FCE4EC] space-y-4"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="flex justify-center">
              <FaGrinStars style={{ color: "#4CAF50" }} className="yoga-icon" />
            </div>
            <h4 className="text-center font-bold w-full">
              Reduce Stress & Anxiety
            </h4>
            <ul>
              <li>Calm Your Mind</li>
              <li>Promote Relaxation</li>
              <li>Boost Mood</li>
            </ul>
          </div>

          <div
            className="yoga-card yoga-gold 	bg-[#E8F5E9] space-y-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="flex items-center justify-center">
              <FaBalanceScale
                style={{ color: "#4CAF50" }}
                className="yoga-icon"
              />
            </div>
            <h4 style={{ color: "black" }} className="font-bold w-full">
              Enhance Strength & Balance
            </h4>
            <ul>
              <li style={{ color: "black" }}>Build Core Strength</li>
              <li style={{ color: "black" }}>Improve Stability</li>
              <li style={{ color: "black" }}>Prevent Falls</li>
            </ul>
          </div>

          <div
            className="yoga-card bg-[#E6F4EA] space-y-4"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="flex items-center justify-center">
              <FaWind style={{ color: "#4CAF50" }} className="yoga-icon" />
            </div>
            <h4 className="font-bold w-full">Improve Breathing</h4>
            <ul>
              <li>Deepen Respiration</li>
              <li>Increase Lung Capacity</li>
              <li>Optimize Oxygen Flow</li>
            </ul>
          </div>
        </div>
        <div className="yoga-card-grid yoga-grid-two-cols">
          <div
            className="yoga-card bg-[#FFF8E1] space-y-4"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="flex items-center justify-center">
              <FaBolt
                style={{ color: "#4CAF50" }}
                className="yoga-icon text-black"
              />
            </div>
            <h4 className="font-bold w-full">Increase Energy Levels</h4>
            <ul>
              <li>Revitalize Your Body</li>
              <li>Boost Vitality</li>
              <li>Combat Fatigue</li>
            </ul>
          </div>

          <div
            className="yoga-card bg-[#F3E5F5] space-y-4"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="flex items-center justify-center">
              <FaLightbulb style={{ color: "#4CAF50" }} className="yoga-icon" />
            </div>
            <h4 style={{ color: "black" }} className="font-bold w-full">
              Enhance Mental Focus
            </h4>
            <ul>
              <li style={{ color: "black" }}>Improve Concentration</li>
              <li style={{ color: "black" }}>Sharpen Clarity</li>
              <li style={{ color: "black" }}>Cultivate Mindfulness</li>
            </ul>
          </div>
        </div>
        {/* +++++++++++++ Feature section +++++++++++++ */}
        <div className="feature-section">
          <h4 style={{ color: "black" }} className="yoga-subtitle">
            Membership Features
          </h4>
          <h2 style={{ color: "black" }} className="yoga-title">
            Unlock Your Exclusive Benefits
          </h2>

          <div className="feature-grid">
            <div className="feature-card space-y-2">
              {/* <MdOutlineFreeBreakfast className="icon" /> */}
              <div className="flex justify-center">
                <img src="./trial.png" className="w-16 h-16  " />
              </div>
              <h3 style={{ color: "black" }} className="font-bold text-xl">
                Free Trials
              </h3>
              <p className="font-medium">
                Enjoy a <strong>14-day absolutely free trial</strong> to explore
                our yoga sessions.
              </p>
            </div>
            <div className="feature-card space-y-2">
              {/* <FaBell className="icon" /> */}
              <div className="flex justify-center">
                <img src="./yoga.png" className="w-16 h-16" />
              </div>
              <h3 style={{ color: "black" }} className="font-bold text-xl">
                Daily Yoga
              </h3>
              <p className="font-medium">
                Access <strong>365 days of uninterrupted yoga sessions</strong>{" "}
                — stay consistent and transform your health daily.
              </p>
            </div>
            <div className="feature-card space-y-2">
              {/* <FaMobileAlt className="icon" /> */}
              <div className="flex justify-center">
                <img src="./qualified.png" className="w-16 h-16" />
              </div>
              <h3 style={{ color: "black" }} className="font-bold text-xl">
                Experienced Trainers
              </h3>
              <p className="font-medium">
                Learn from <strong>highly experienced yoga experts</strong>{" "}
                offering guidance and depth in each asana.
              </p>
            </div>
            <div className="feature-card space-y-2">
              {/* <FaUsers className="icon" /> */}
              <div className="flex justify-center">
                <img src="./pc.png" className="w-16 h-16" />
              </div>
              <h3 style={{ color: "black" }} className="font-bold text-xl">
                Online Access
              </h3>
              <p className="font-medium">
                Attend classes <strong>from anywhere</strong> — all you need is
                an internet connection.
              </p>
            </div>

            <div className="feature-card second-row space-y-2">
              {/* <FaClock className="icon" /> */}
              <div className="flex justify-center">
                <img src="./flexibleTiming.png" className="w-16 h-16" />
              </div>
              <h3 style={{ color: "black" }} className="font-bold text-xl">
                Flexible Timings
              </h3>
              <p className="font-medium">
                Sessions are available <strong>every single day</strong>, giving
                you flexibility to practice at your pace.
              </p>
            </div>
            <div className="feature-card second-row space-y-2">
              {/* <FaUserMd className="icon" /> */}
              <div className="flex justify-center">
                <img src="./others.png" className="w-16 h-16" />
              </div>
              <h3 style={{ color: "black" }} className="font-bold text-xl">
                Other Wellness Programs
              </h3>
              <p className="font-medium">
                Subscribers get access to{" "}
                <strong>additional wellness programs</strong>, including
                <strong>nutrition guidance</strong> and more —{" "}
                <strong>at no extra cost</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <p>Start Your Journey</p>
        <h2 style={{ color: "black" }}>
          Ready for a Change? Begin Your Wellness Journey!
        </h2>
        <button
          className="cta-button-glow"
          onClick={() => setShowRegister(true)}
        >
          Register Now for FREE →
        </button>
        <p className="cta-note">1.18 Crore + already attended</p>
      </section>

      {/* ++++++++++++++++ Trainer ++++++++++++++ */}
      <div className="divine-wrapper flex flex-wrap justify-evenly gap-10 px-20">
        {trainers.map((trainer) => (
          <div className="max-w-80 rounded-sm flex items-center flex-col space-y-3">
            <img src={trainer.image} className="w-50 h-50 rounded-full " />
            <div className="space-y-2">
              <h1 className="great-vibes-regular text-white text-3xl text-center font-bold">
                {trainer.name}
              </h1>
              <p className="text-white text-center font-medium text-xs tracking-wide">
                {trainer.about}
              </p>
            </div>
          </div>
        ))}
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
              ×
            </span>
          </form>
        </div>
      )}

      <section className="founders-faqs">
        <h2 className="section-title">Meet Our Founder</h2>

        <div {...sliderSettings} className="founder-slider ">
          {founderSlides.map((slide, index) => (
            <div key={index} className="founder-slide bg-[#AABB63]">
              <div className="flex justify-center">
                <img src={slide.img} alt={slide.name} className="founder-img" />
              </div>
              <h4>{slide.name}</h4>
              <p>{slide.title}</p>
              <small>{slide.desc}</small>
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />

        <h1
          style={{ paddingBottom: "20px", fontSize: "40px" }}
          className="faq-heading"
        >
          Frequently asked questions
        </h1>
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
