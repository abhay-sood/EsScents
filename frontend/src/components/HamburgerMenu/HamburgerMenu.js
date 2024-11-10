import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sheetRef = useRef(null);
  const blurOverlayRef = useRef(null);
  const menuItemsRef = useRef(null);

  const openMenu = () => {
    // Kill any existing animations to prevent conflicts
    gsap.killTweensOf([sheetRef.current, blurOverlayRef.current, menuItemsRef.current]);

    // Make the sheet and blur overlay visible
    gsap.set([sheetRef.current, blurOverlayRef.current], { visibility: 'visible' });

    // Hide the menu items initially
    gsap.set(menuItemsRef.current, { opacity: 0, visibility: 'visible' });

    // Animate the blur overlay to fade in
    gsap.to(blurOverlayRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.inOut',
    });

    // Animate the menu sheet to slide down
    gsap.to(sheetRef.current, {
      top: '0', // Slide the menu down
      duration: 0.5,
      ease: 'power2.inOut',
      onStart: () => setIsMenuOpen(true),
      onComplete: () => {
        // Animate menu items to fade in
        gsap.to(menuItemsRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.inOut',
        });
      },
    });
  };

  const closeMenu = () => {
    // Kill any existing animations to prevent conflicts
    gsap.killTweensOf([sheetRef.current, blurOverlayRef.current, menuItemsRef.current]);

    // Animate the blur overlay to fade out
    gsap.to(blurOverlayRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
    });

    // Animate the menu items to fade out
    gsap.to(menuItemsRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete: () => {
        // Hide the menu sheet after the menu items fade out
        gsap.to(sheetRef.current, {
          top: '-100vh', // Slide the menu up off-screen
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete: () => {
            setIsMenuOpen(false);
            gsap.set(sheetRef.current, { visibility: 'hidden' }); // Hide the sheet after sliding up
            gsap.set(menuItemsRef.current, { visibility: 'hidden' }); // Hide the menu items
          },
        });
      },
    });
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  useEffect(() => {
    // Initial setup: hide both overlay and sheet
    gsap.set(sheetRef.current, { top: '-100vh', visibility: 'hidden' });
    gsap.set(blurOverlayRef.current, { opacity: 0 });
    gsap.set(menuItemsRef.current, { visibility: 'hidden', opacity: 0 });
  }, []);

  return (
    <>
      <div className="absolute top-5 left-5 z-50">
        <button
          className="text-white text-xl md:text-2xl flex items-center justify-center"
          style={{ height: '30px', width: '30px' }}
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <ion-icon name="close" style={{ fontSize: '24px' }}></ion-icon>
          ) : (
            <ion-icon name="menu" style={{ fontSize: '24px' }}></ion-icon>
          )}
        </button>
      </div>

      {/* Blur overlay */}
      <div
        ref={blurOverlayRef}
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30 pointer-events-none"
        style={{ opacity: 0 }}
      ></div>

      {/* Menu sheet */}
      <div
        ref={sheetRef}
        className="fixed top-0 left-0 w-full z-40"
        style={{ backgroundColor: '#161617', height: '40%', visibility: 'hidden' }}
      >
        <div
          ref={menuItemsRef}
          className="pt-16 flex flex-col items-start space-y-6 pl-8"
          style={{ opacity: 0, visibility: 'hidden' }}
        >
          <a href="#home" className="text-white text-4xl hover:text-gray-300">
            Home
          </a>
          <a href="#products" className="text-white text-4xl hover:text-gray-300">
            Products
          </a>
          <a href="#about" className="text-white text-4xl hover:text-gray-300">
            About
          </a>
          <a href="#contact" className="text-white text-4xl hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;