"use client";

import { useState } from "react";

const faqs = [
    {
        q: "Is this in-hand salary calculator accurate?",
        a: "This calculator provides an approximate estimation based on standard salary structures in India. Actual in-hand salary may vary depending on company policies and tax rules."
    },
    {
        q: "Does this calculator include income tax?",
        a: "Yes, it includes an estimated income tax calculation based on the selected tax regime. It does not replace professional tax advice."
    },
    {
        q: "What is the difference between CTC and in-hand salary?",
        a: "CTC is the total cost a company spends on an employee, while in-hand salary is the amount you receive in your bank account after deductions."
    },
    {
        q: "Which tax regime is better, old or new?",
        a: "The better tax regime depends on your deductions and investments. The old regime allows exemptions, while the new regime offers lower tax rates."
    },
    {
        q: "Can freelancers use this calculator?",
        a: "This calculator is mainly designed for salaried employees. Freelancers and consultants may have different tax structures."
    }
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className="faq-section">
            <h2 className="text-2xl font-bold">
                Frequently Asked Questions (FAQs)
            </h2>

            <div>
                {faqs.map((item, index) => (
                    <div key={index} className="faq-item">
                        <div
                            className="faq-question"
                            onClick={() => setOpen(open === index ? null : index)}
                        >
                            <span>{item.q}</span>
                            <span>{open === index ? "−" : "+"}</span>
                        </div>

                        {open === index && (
                            <div className="faq-answer">
                                {item.a}
                            </div>
                        )}

                    </div>
                ))}
                <section style={{ marginTop: "48px" }}>
                    <h2 className="text-xl font-bold mb-4">
                        How In-Hand Salary Is Calculated in India
                    </h2>

                    <p className="text-sm text-gray-600 leading-relaxed">
                        In-hand salary is the actual amount an employee receives in their bank
                        account every month after all mandatory deductions. While companies usually
                        mention Cost to Company (CTC) in offer letters, the take-home salary is lower
                        due to deductions such as Provident Fund (PF), income tax, and professional
                        tax.
                    </p>

                    <p className="text-sm text-gray-600 leading-relaxed mt-3">
                        This in-hand salary calculator helps you estimate your monthly and annual
                        take-home salary based on your CTC. By adjusting factors such as basic salary
                        percentage, PF contribution, and tax regime, you can understand how much
                        salary you will actually receive.
                    </p>

                    <p className="text-sm text-gray-600 leading-relaxed mt-3">
                        Understanding your in-hand salary is important for financial planning,
                        budgeting, and salary negotiations. This calculator provides a quick and
                        easy way to compare different salary structures and make informed decisions.
                    </p>

                    <p className="text-sm mt-4">
                        You may also find our{" "}
                        <a href="/salary-hike-calculator" className="text-blue-600">
                            Salary Hike Calculator
                        </a>{" "}
                        and{" "}
                        <a href="/pf-calculator" className="text-blue-600">
                            PF Calculator
                        </a>{" "}
                        useful.
                    </p>
                </section>


            </div>
        </section>
    );
}
