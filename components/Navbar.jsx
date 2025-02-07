import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <Link href="/"><h1>David Sandoval</h1></Link>
      </div>
      <nav aria-label="Main navigation">
        <button className="navbar-toggle" aria-label="Toggle navigation">
          <span className="hamburger-icon"></span>
        </button>
        <ul className="navbar-links">
          <li><Link href="/about">About me</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
