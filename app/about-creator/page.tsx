import Image from "next/image";

export const metadata = {
    title: "About Me – Developer Behind Salary Tools India",
    description:
        "Learn about the developer behind Salary Tools India, including skills, expertise, and projects built using modern web technologies.",
};

export default function AboutMe() {
    return (
        <main className="page-wrapper">
            {/* HERO PROFILE */}
            <section
                style={{
                    display: "grid",
                    gap: "32px",
                    alignItems: "center",
                }}
                className="md:grid-cols-2"
            >
                {/* TEXT */}
                <div>
                    <h1 className="page-title">Hi, I’m the Developer Behind This Site</h1>
                    <p className="page-subtitle">
                        I build practical web applications focused on simplicity,
                        performance, and real-world use cases.
                    </p>

                    <p className="text-sm text-gray-600 leading-relaxed mt-4">
                        I specialize in building practical web applications that prioritize simplicity,
                        performance, and real-world usability. My focus is on creating tools that are easy
                        to understand, fast to use, and genuinely helpful for end users.

                        Salary Tools India is an independent project developed to help users clearly
                        understand salary structures, deductions, and financial calculations without
                        confusion. I enjoy solving real problems through clean design, efficient logic,
                        and thoughtful user experience—avoiding unnecessary complexity wherever possible.

                    </p>
                </div>

                {/* PHOTO */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div
                        style={{
                            borderRadius: "50%",
                            overflow: "hidden",
                            width: "220px",
                            height: "220px",
                            border: "4px solid rgba(255,255,255,0.6)",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                        }}
                    >
                        <Image
                            src="/me.png"
                            alt="Developer profile photo"
                            width={220}
                            height={220}
                        />
                    </div>
                </div>
            </section>

            {/* SKILLS */}
            <section style={{ marginTop: "64px" }}>
                <h2 className="text-xl font-bold mb-4">Technical Skills</h2>

                <div className="calculator-grid">
                    <div className="card">
                        <h3 className="card-title">Frontend</h3>
                        <p className="text-sm text-gray-600">
                            HTML, CSS, JavaScript, React, Next.js, Tailwind CSS
                        </p>
                    </div>

                    <div className="card">
                        <h3 className="card-title">Backend</h3>
                        <p className="text-sm text-gray-600">
                            Node.js, Python, REST APIs, Server-side Logic
                        </p>
                    </div>

                    <div className="card">
                        <h3 className="card-title">Tools & Platforms</h3>
                        <p className="text-sm text-gray-600">
                            Git, GitHub, Vercel, SEO Optimization, Performance Tuning
                        </p>
                    </div>

                    <div className="card">
                        <h3 className="card-title">Focus Areas</h3>
                        <p className="text-sm text-gray-600">
                            SaaS tools, automation, calculators, SEO-friendly web apps
                        </p>
                    </div>
                </div>
            </section>

            {/* PROJECTS */}
            <section style={{ marginTop: "64px" }}>
                <h2 className="text-xl font-bold mb-4">Projects & Work</h2>

                <div className="card">
                    <h3 className="card-title">Salary Tools India</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        A collection of salary and finance calculators including In-Hand
                        Salary Calculator, PF Calculator, and Salary Hike Calculator.
                        Designed with a focus on clarity, speed, and usability.
                    </p>
                </div>
            </section>

            {/* EXPERTISE */}
            <section style={{ marginTop: "64px" }}>
                <h2 className="text-xl font-bold mb-4">What I Specialize In</h2>

                <p className="text-sm text-gray-600 leading-relaxed">
                    I specialize in building lightweight SaaS-style tools that are easy
                    to understand and fast to use. My approach focuses on clean UI,
                    maintainable code, and search-friendly architecture. I enjoy turning
                    complex ideas into simple applications.
                </p>
            </section>
        </main>
    );
}
