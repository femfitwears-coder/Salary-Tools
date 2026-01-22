import Link from "next/link";
export const metadata = {
  title: "Free Salary & Finance Calculators for India | Salary Tools India",
  description:
    "Use free salary calculators to calculate in-hand salary, PF contribution, and salary hike in India. Simple, fast, and accurate tools.",
};


export default function Home() {

  return (
    <main className="page-wrapper">
      {/* HERO SECTION */}
      <section className="home-hero">
        <h1 className="home-title">
          Simple Salary & Finance Calculators for India
        </h1>
        <p className="home-subtitle">
          Understand your in-hand salary, PF deductions, and future earnings
          with clean, accurate, and free calculators designed for Indian
          employees.
        </p>
      </section>

      {/* TOOLS SECTION */}
      <section className="home-tools">
        <div className="home-tools-grid">
          {/* In-Hand Salary */}
          <div className="home-card">
            <h2 className="home-card-title">
              In-Hand Salary Calculator
            </h2>
            <p className="home-card-desc">
              Calculate your monthly take-home salary from CTC after PF and
              estimated tax deductions.
            </p>
            <Link
              href="/in-hand-salary-calculator"
              className="home-card-link"
            >
              Use Calculator →
            </Link>
          </div>

          {/* PF Calculator */}
          <div className="home-card">
            <h2 className="home-card-title">
              PF Calculator
            </h2>
            <p className="home-card-desc">
              Check employee and employer Provident Fund contribution in a
              simple and clear format.
            </p>
            <Link
              href="/pf-calculator"
              className="home-card-link"
            >
              Calculate PF →
            </Link>
          </div>

          {/* Salary Hike */}
          <div className="home-card">
            <h2 className="home-card-title">
              Salary Hike Calculator
            </h2>
            <p className="home-card-desc">
              Estimate your new salary after increment or appraisal.
            </p>
            <Link href="/salary-hike-calculator" className="home-card-link">
              Calculate Salary Hike →
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}
