import Calculator from "./Calculator";
import FAQ from "./FAQ";
import Footer from "../components/Footer";

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Is this in-hand salary calculator accurate?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text":
                    "This calculator provides an approximate estimation based on standard salary structures in India. Actual in-hand salary may vary depending on company policies and tax rules."
            }
        },
        {
            "@type": "Question",
            "name": "Does this calculator include income tax?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text":
                    "Yes, it includes an estimated income tax calculation based on the selected tax regime. It does not replace professional tax advice."
            }
        },
        {
            "@type": "Question",
            "name": "What is the difference between CTC and in-hand salary?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text":
                    "CTC is the total cost a company spends on an employee, whereas in-hand salary is the amount you receive in your bank account after deductions."
            }
        },
        {
            "@type": "Question",
            "name": "Which tax regime is better, old or new?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text":
                    "The better tax regime depends on your deductions and investments. The old regime allows exemptions, while the new regime offers lower tax rates."
            }
        },
        {
            "@type": "Question",
            "name": "Can freelancers use this calculator?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text":
                    "This calculator is mainly designed for salaried employees. Freelancers and consultants may have different tax structures."
            }
        }
    ]
};

export const metadata = {
    title: "In-Hand Salary Calculator India – CTC to Take Home",
    description:
        "Calculate your monthly in-hand salary from CTC in India. Includes PF, tax regime comparison, and salary breakup.",
};

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />

            <div className="page-wrapper">
                <h1 className="page-title">In-Hand Salary Calculator (India)</h1>
                <p className="page-subtitle">
                    Calculate your monthly in-hand salary from CTC based on PF and tax regime.
                </p>


                <Calculator />
                <div className="faq-wrapper">
                    <FAQ />
                </div>


                

                {/* SEO CONTENT + FAQ stays here (already added) */}

                <p className="text-xs text-gray-500 mt-6">
                    Disclaimer: This calculator provides approximate values for educational
                    purposes only. Actual salary may vary.
                </p>
            </div>
        </>
    );
}
