import React from 'react';
import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
  textDecoration: 'none', // Add this to remove default underline
  color: 'black', // Add this to set the link color
};

const Header = () => (
  <div>
    <Link legacyBehavior href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link legacyBehavior href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link legacyBehavior href="/projects">
      <a style={linkStyle}>Projects</a>
    </Link>

    <Link legacyBehavior href="/contact">
      <a style={linkStyle}>Contact</a>
    </Link>
  </div>
);

export default Header;
