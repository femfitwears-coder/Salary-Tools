import Link from "next/link";

export default function Navbar() {
  return (
    <header className="site-navbar">
      <div className="navbar-inner">
        {/* LOGO / BRAND */}
        <Link href="/" className="navbar-logo">
          Salary Tools
        </Link>

        {/* NAV LINKS */}
        <nav className="navbar-links">
          <Link href="/in-hand-salary-calculator">In-Hand Salary</Link>
          <Link href="/salary-hike-calculator">Salary Hike</Link>
          <Link href="/pf-calculator">PF</Link>
          <Link href="/about-me">About</Link>
        </nav>
      </div>
    </header>
  );
}
