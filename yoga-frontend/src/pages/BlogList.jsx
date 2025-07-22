import React, { useEffect, useState } from "react";
import { getAllBlogs } from "../services/api";
import "../pages/CSS/BlogList.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PublicBlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getAllBlogs().then((res) => setBlogs(res.data));
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="blog-list-container min-h-screen flex flex-col items-center">
      {/* <h2 className="blog-heading mt-10">📰 Latest Blogs</h2> */}
      <h2 className="mt-10 text-3xl font-bold">🧘‍♀️ Blog Coming Soon</h2>
      <p className="text-lg font-light text-gray-700">
        We're preparing something mindful for your soul. Stay tuned for
        inspiring content, wellness tips, and more!
      </p>
      {/* <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div
            className="blog-card animated fadeInUp"
            key={blog._id || blog.id}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="blog-image-slider">
              <Slider {...sliderSettings}>
                {(Array.isArray(blog.thumbnail) ? blog.thumbnail : [blog.thumbnail]).map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Blog ${idx + 1}`}
                    className="blog-image"
                  />
                ))}
              </Slider>
            </div>
            <div className="blog-content">
              <h4>{blog.title}</h4>
              <p className="blog-meta">{blog.category} • {blog.time_to_read}</p>
              <small className="blog-author">
                {blog.author} • {new Date(blog.published_at).toLocaleDateString()}
              </small>
              <p className="blog-description">{blog.description.slice(0, 150)}...</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
