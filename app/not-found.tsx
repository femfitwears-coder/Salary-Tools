import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="notfound-wrapper hide-footer">
      <div className="notfound-container">
        {/* LEFT TEXT */}
        <div className="notfound-text">
          <h1 className="notfound-title">404</h1>
          <h2 className="notfound-subtitle">
            Oops! Page not found
          </h2>

          <p className="notfound-message">
            Looks like this page went on unpaid leave. <br />
            Our little blue friend is still searching.
          </p>

          <Link href="/" className="notfound-btn">
            Go back to Home →
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="notfound-image">
          <Image
            src="/4042.png"
            alt="Lost cute character"
            width={420}
            height={420}
            priority
          />
        </div>
      </div>
    </main>
  );
}
