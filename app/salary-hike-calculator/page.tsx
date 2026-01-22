"use client";

import { useState } from "react";

export default function SalaryHikeCalculator() {
    const [currentSalary, setCurrentSalary] = useState(0);
    const [hikePercent, setHikePercent] = useState(10);

    const increasedAmount = (currentSalary * hikePercent) / 100;
    const newAnnualSalary = currentSalary + increasedAmount;
    const newMonthlySalary = newAnnualSalary / 12;

    return (
        <main className="page-wrapper">
            <h1 className="page-title">Salary Hike Calculator (India)</h1>
            <p className="page-subtitle">
                Calculate your new salary after appraisal or increment using percentage-based hike.
            </p>

            <div className="calculator-grid">
                {/* INPUT CARD */}
                <div className="card">
                    <h2 className="card-title">Current Salary Details</h2>

                    <div className="form-group">
                        <label className="form-label">Current Annual Salary (₹)</label>
                        <input
                            type="number"
                            className="form-input"
                            value={currentSalary}
                            onChange={(e) => setCurrentSalary(Number(e.target.value))}
                            placeholder="e.g. 600000"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Hike Percentage (%)</label>
                        <input
                            type="number"
                            className="form-input"
                            value={hikePercent}
                            onChange={(e) => setHikePercent(Number(e.target.value))}
                        />
                    </div>
                </div>

                {/* RESULT CARD */}
                <div className="card result-card">
                    <h2 className="card-title">New Salary After Hike</h2>

                    <div className="result-main">
                        ₹{isNaN(newMonthlySalary) ? 0 : newMonthlySalary.toFixed(0)}
                    </div>

                    <div className="result-row">
                        New Annual Salary: ₹{isNaN(newAnnualSalary) ? 0 : newAnnualSalary.toFixed(0)}
                    </div>

                    <div className="result-row">
                        Hike Amount: ₹{isNaN(increasedAmount) ? 0 : increasedAmount.toFixed(0)}
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <section className="faq-section">
                <h2 className="text-2xl font-bold mb-6">
                    Salary Hike Calculator FAQs
                </h2>

                <div className="faq-item">
                    <div className="faq-question">
                        What is salary hike percentage?
                    </div>
                    <div className="faq-answer">
                        Salary hike percentage is the increase applied to your current salary during appraisal or promotion.
                    </div>
                </div>

                <div className="faq-item">
                    <div className="faq-question">
                        Is this calculator accurate?
                    </div>
                    <div className="faq-answer">
                        This calculator gives a quick estimation. Actual salary may vary based on company policies and taxes.
                    </div>
                </div>

                <div className="faq-item">
                    <div className="faq-question">
                        Can I calculate monthly salary after hike?
                    </div>
                    <div className="faq-answer">
                        Yes, the calculator shows both annual and monthly salary after applying the hike percentage.
                    </div>
                </div>
                <section style={{ marginTop: "48px" }}>
                    <h2 className="text-xl font-bold mb-4">
                        How Salary Hike Is Calculated After Appraisal
                    </h2>

                    <p className="text-sm text-gray-600 leading-relaxed">
                        A salary hike is an increase in an employee’s existing salary, usually
                        offered during annual appraisals, promotions, or role changes. The hike is
                        often expressed as a percentage of the current salary and directly impacts
                        both monthly and annual earnings.
                    </p>

                    <p className="text-sm text-gray-600 leading-relaxed mt-3">
                        This salary hike calculator allows you to calculate your new salary after
                        applying a hike percentage. By entering your current salary and expected
                        increment, you can instantly see your revised monthly and annual income.
                    </p>

                    <p className="text-sm text-gray-600 leading-relaxed mt-3">
                        Knowing your post-hike salary helps in better financial planning, tax
                        estimation, and understanding the real impact of an appraisal. This tool is
                        useful for employees, job switchers, and professionals preparing for salary
                        discussions.
                    </p>

                    <p className="text-sm mt-4">
                        To understand how deductions affect your salary, try our{" "}
                        <a href="/in-hand-salary-calculator" className="text-blue-600">
                            In-Hand Salary Calculator
                        </a>.
                    </p>
                </section>


            </section>
        </main>
    );
}
