import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* BRAND */}
        <div className="footer-brand">
          <h3>Salary Tools</h3>
          <p>
            Simple and free salary & finance calculators to help Indian
            employees understand their income better.
          </p>
        </div>

        {/* TOOLS LINKS */}
        <div className="footer-links">
          <h4>Calculators</h4>
          <Link href="/in-hand-salary-calculator">
            In-Hand Salary
          </Link>
          <Link href="/pf-calculator">
            PF Calculator
          </Link>
        </div>

        {/* LEGAL */}
        <div className="footer-links">
          <h4>Legal</h4>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/about-creator">About Me</Link>

        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Salary Tools. All rights reserved.
      </div>
    </footer>
  );
}
