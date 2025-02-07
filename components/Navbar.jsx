import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <Link href="/"><h1>David Sandoval</h1></Link>
      </div>
      <nav aria-label="Main navigation">
        <button
          className="navbar-toggle"
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="hamburger-icon"></span>
        </button>
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li><Link href="/about">About me</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
