import React from 'react';
import Link from 'next/link';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar__links">
      <Link href="/">
        <a className="navbar__links__link">Index</a>
      </Link>
      <Link href="/content">
        <a className="navbar__links__link">Content</a>
      </Link>
      <Link href="/about">
        <a className="navbar__links__link">About</a>
      </Link>
    </div>
  </nav>
);

export default Navbar;
