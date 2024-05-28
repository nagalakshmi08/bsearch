import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='background-overlay'></div>
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Welcome to BSEARCH, your ultimate destination to explore and discover books. Whether you're looking for the latest bestsellers, timeless classics, or hidden gems, our search tool makes it easy to find the perfect book for you. Dive into the world of literature and start your reading adventure today!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header;
