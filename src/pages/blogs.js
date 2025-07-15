"use client"

import { useState, useEffect } from "react"

import "../components_css/blogs.css"
import solar from "../images/solar/solar3.png"
import solar1 from "../images/solar/solar5.jpg"
import smart from "../images/smartmeters/singlephase2.png"
import iot from "../images/Home/home1.png"
import substation from "../images/substations/construction.jpg"
import streetlights from "../images/streetlights/lights7.png"
const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".blog-animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Smart Grid Technology",
      excerpt:
        "Exploring how smart grid technology is revolutionizing power distribution and management systems across India.",
      category: "Smart Grid",
      author: "Dr. Rajesh Kumar",
      date: "2024-01-15",
      readTime: "5 min read",
      image: solar,
      tags: ["Smart Grid", "Technology", "Innovation"],
    },
    {
      id: 2,
      title: "Solar Panel Efficiency: Latest Innovations",
      excerpt:
        "Discover the latest breakthroughs in solar panel technology that are increasing efficiency and reducing costs.",
      category: "Solar Energy",
      author: "Priya Sharma",
      date: "2024-01-10",
      readTime: "7 min read",
      image: solar1,
      tags: ["Solar", "Renewable Energy", "Efficiency"],
    },
    {
      id: 3,
      title: "Smart Meters: Transforming Energy Management",
      excerpt:
        "How smart meters are enabling better energy management and helping consumers reduce their electricity bills.",
      category: "Smart Meters",
      author: "Amit Patel",
      date: "2024-01-05",
      readTime: "6 min read",
      image: smart,
      tags: ["Smart Meters", "Energy Management", "IoT"],
    },
    {
      id: 4,
      title: "IoT in Power Systems: A Comprehensive Guide",
      excerpt:
        "Understanding the role of Internet of Things in modern power systems and its impact on grid reliability.",
      category: "IoT Solutions",
      author: "Sneha Reddy",
      date: "2023-12-28",
      readTime: "8 min read",
      image: iot,
      tags: ["IoT", "Power Systems", "Connectivity"],
    },
    {
      id: 5,
      title: "Substation Automation: Best Practices",
      excerpt: "Key considerations and best practices for implementing automation in electrical substations.",
      category: "Substations",
      author: "Vikram Singh",
      date: "2023-12-20",
      readTime: "9 min read",
      image: substation,
      tags: ["Substations", "Automation", "Best Practices"],
    },
    {
      id: 6,
      title: "Street Light Management Systems",
      excerpt: "How intelligent street lighting systems are making cities smarter and more energy-efficient.",
      category: "Smart Lighting",
      author: "Kavya Nair",
      date: "2023-12-15",
      readTime: "4 min read",
      image: streetlights,
      tags: ["Smart Lighting", "City Management", "Energy Efficiency"],
    },
  ]

  const categories = [
    "all",
    "Smart Grid",
    "Solar Energy",
    "Smart Meters",
    "IoT Solutions",
    "Substations",
    "Smart Lighting",
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="blog-page">
  

      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-background"></div>
        <div className="blog-hero-content">
          <div className="blog-container">
            <div className="blog-hero-text blog-animate-on-scroll" id="hero-text">
              <h1>Knowledge Hub</h1>
              <p>
                Stay updated with the latest insights, trends, and innovations in electrical engineering and smart
                technology solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="blog-filters">
        <div className="blog-container">
          <div className="blog-search-filter blog-animate-on-scroll" id="search-filter">
            <div className="blog-search-box">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="blog-search-input"
              />
              <div className="blog-search-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
            </div>

            <div className="blog-category-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`blog-category-btn ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === "all" ? "All Articles" : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts">
        <div className="blog-container">
          <div className="blog-posts-grid">
            {filteredPosts.map((post, index) => (
              <article key={post.id} className="blog-post-card blog-animate-on-scroll" id={`post-${index}`}>
                <div className="blog-post-image">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} />
                  <div className="blog-post-category">{post.category}</div>
                </div>

                <div className="blog-post-content">
                  <div className="blog-post-meta">
                    <span className="blog-post-author">{post.author}</span>
                    <span className="blog-post-date">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="blog-post-read-time">{post.readTime}</span>
                  </div>

                  <h3 className="blog-post-title">{post.title}</h3>
                  <p className="blog-post-excerpt">{post.excerpt}</p>

                  <div className="blog-post-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="blog-post-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="blog-read-more-btn">
                    Read More
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="blog-no-results">
              <h3>No articles found</h3>
              <p>Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="blog-newsletter">
        <div className="blog-container">
          <div className="blog-newsletter-content blog-animate-on-scroll" id="newsletter">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter and get the latest articles delivered to your inbox</p>
            <div className="blog-newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button type="submit">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Blogs
