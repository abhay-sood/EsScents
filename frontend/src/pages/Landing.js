import React from 'react';
import HamburgerMenu from '../components/HamburgerMenu/HamburgerMenu';
import CardScroller from '../components/CardScroller/CardScroller';
import SearchBar from '../components/SearchBar/SearchBar';

const Landing = () => {
  return (
    <div className="relative flex flex-col items-center min-h-screen">
      {/* Hamburger Menu */}
      <HamburgerMenu />

      {/* Black Background Section */}
      <div className="flex flex-col items-center text-center w-full py-16">
        {/* Website Title */}
        <h1 className="text-white text-9xl font-elegant">EsScents</h1>

        {/* Subheadings */}
        <p className="text-white text-xl mt-2 font-elegant">A Cologne Catalogue</p>
        <p className="text-white text-xs mt-2 font-cursive">
          Established 2024 • Dallas, Texas
        </p>

        {/* White Line Separator */}
        <hr className="w-1/6 border-t border-white mt-4" />
      </div>

      {/* Search Bar */}
      <div className="flex justify-center w-full mb-12"> {/* Ensure centering */}
        <SearchBar />
      </div>

      {/* Card Scroller */}
      <div className="w-full px-4">
        <CardScroller />
      </div>
    </div>
  );
};

export default Landing;