import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BSearch</h2>
            <p className='fs-17'>About BSearch
Welcome to Literary Explorer, where finding detailed information about books is effortless. Our platform allows you to search for books by title, author, or genre, providing you with detailed descriptions, publication information, and more.</p>
            <p className='fs-17'> Whether you're researching for a project or looking for your next read, Literary Explorer has everything you need in one place!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
