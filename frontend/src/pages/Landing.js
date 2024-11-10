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
        <h1 className="text-white text-9xl font-cursive">
          EsScents
        </h1>

        {/* Subheadings */}
        <p className="text-white text-lg mt-2 italic">
          A Cologne Catalogue
        </p>
        <p className="text-white text-xs mt-2 italic">
          Established 2024 • Dallas, Texas
        </p>

        {/* White Line Separator */}
        <hr className="w-1/6 border-t border-white mt-4" />
      </div>

      <SearchBar />

      <CardScroller />
    </div>
  );
};

export default Landing;