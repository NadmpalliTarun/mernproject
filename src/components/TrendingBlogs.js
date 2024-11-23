import React, { useState } from 'react';
import './TrendingBlogs.css';

function TrendingBlogs() {
  const blogs = [
    { title: 'Top 10 Travel Destinations', image: '/images/travel.jpg', content: 'Discover the best places to visit...' },
    { title: 'How to Start a Blog', image: '/images/blogging.jpg', content: 'Tips to create a successful blog...' },
    { title: 'Healthy Eating Habits', image: '/images/food.jpg', content: 'Improve your health with these tips...' },
    { title: 'Mastering Photography', image: '/images/photography.jpg', content: 'Capture the world with these tips...' },
    { title: 'Guide to Meditation', image: '/images/meditation.jpg', content: 'Find peace and focus with meditation...' },
    { title: 'Exploring Art History', image: '/images/art.jpg', content: 'Dive into the history of art...' },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [openedBlog, setOpenedBlog] = useState(null); // Track the opened blog

  const handleNextBlogs = () => {
    setStartIndex((prevIndex) => (prevIndex + 3) % blogs.length);
  };

  const handleOpenBlog = (index) => {
    setOpenedBlog(index); // Open the blog content in a modal
  };

  const handleCloseBlog = () => {
    setOpenedBlog(null); // Close the blog modal
  };

  const visibleBlogs = blogs.slice(startIndex, startIndex + 3);

  return (
    <section id="trending" className="trending-blogs">
      <h2>Trending Blogs</h2>
      <div className="blogs">
        {visibleBlogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <button className="open-btn" onClick={() => handleOpenBlog(index)}>Open</button>
          </div>
        ))}
      </div>
      <button onClick={handleNextBlogs} className="next-arrow">→</button>

      {/* Modal for displaying the full blog content */}
      {openedBlog !== null && (
        <div className="blog-modal">
          <div className="modal-content">
            <span className="close-btn" onClick={handleCloseBlog}>×</span>
            <h3>{blogs[openedBlog].title}</h3>
            <img src={blogs[openedBlog].image} alt={blogs[openedBlog].title} />
            <p>{blogs[openedBlog].content} (Discover the best places to visit across the globe. From the picturesque landscapes of New Zealand to the vibrant streets of Tokyo, these destinations offer something for every traveler. Whether you're seeking adventure, relaxation, or cultural immersion, our top 10 picks are sure to inspire your next vacation. Explore the serene beaches of the Maldives, the historic landmarks of Rome, and the breathtaking fjords of Norway.)</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default TrendingBlogs;
