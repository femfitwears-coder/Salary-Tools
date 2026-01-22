"use client";
import { useState } from "react";


export default function PFCalculator() {
    const [basic, setBasic] = useState<number>(0);

    const employeePF = basic * 0.12;
    const employerPF = basic * 0.12;
    const totalPF = employeePF + employerPF;

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-4">
                PF Calculator (India)
            </h1>

            <p className="text-gray-600 mb-6">
                Calculate Provident Fund (PF) contribution for salaried employees in India.
            </p>

            <div className="bg-white shadow-md rounded-xl p-6 mb-8">
                <label className="block mb-4">
                    <span className="text-sm text-gray-600">Monthly Basic Salary (₹)</span>
                    <input
                        type="number"
                        className="w-full mt-1 p-2 border rounded"
                        value={basic}
                        onChange={(e) => setBasic(Number(e.target.value))}
                    />
                </label>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 shadow-md">
                <h2 className="text-xl font-semibold mb-4">PF Breakdown</h2>
                <p>Employee PF (12%): ₹{employeePF.toFixed(0)}</p>
                <p>Employer PF (12%): ₹{employerPF.toFixed(0)}</p>
                <p className="font-semibold mt-2">
                    Total Monthly PF: ₹{totalPF.toFixed(0)}
                </p>
            </div>
            {/* FAQ SECTION */}
            <section className="faq-section">
                <h2 className="text-2xl font-bold mb-6">
                    Provident Fund (PF) Calculator FAQs
                </h2>

                <div className="faq-item">
                    <div className="faq-question">
                        What is Provident Fund (PF)?
                    </div>
                    <div className="faq-answer">
                        Provident Fund is a retirement savings scheme where both employee and
                        employer contribute a fixed percentage of salary every month.
                    </div>
                </div>

                <div className="faq-item">
                    <div className="faq-question">
                        How much PF is deducted from salary?
                    </div>
                    <div className="faq-answer">
                        Usually, 12% of basic salary is deducted as employee PF contribution,
                        while the employer also contributes 12%.
                    </div>
                </div>

                <div className="faq-item">
                    <div className="faq-question">
                        Is PF mandatory for all employees?
                    </div>
                    <div className="faq-answer">
                        PF is mandatory for salaried employees earning up to the prescribed
                        limit under EPF rules. Some companies allow voluntary PF above the limit.
                    </div>
                </div>

                <div className="faq-item">
                    <div className="faq-question">
                        Does PF reduce in-hand salary?
                    </div>
                    <div className="faq-answer">
                        Yes, employee PF contribution is deducted from salary, which reduces
                        monthly in-hand pay but helps in long-term savings.
                    </div>
                </div>
            </section>
            <section style={{ marginTop: "48px" }}>
                <h2 className="text-xl font-bold mb-4">
                    Understanding Provident Fund (PF) Contribution in India
                </h2>

                <p className="text-sm text-gray-600 leading-relaxed">
                    Provident Fund (PF) is a mandatory retirement savings scheme for salaried
                    employees in India. Under EPF rules, both the employee and employer
                    contribute a fixed percentage of the employee’s basic salary towards the
                    provident fund every month.
                </p>

                <p className="text-sm text-gray-600 leading-relaxed mt-3">
                    This PF calculator helps you calculate employee and employer PF
                    contributions easily. By entering your basic salary, you can understand how
                    much amount is deducted from your salary and how much your employer
                    contributes on your behalf.
                </p>

                <p className="text-sm text-gray-600 leading-relaxed mt-3">
                    While PF deductions reduce monthly in-hand salary, they play a crucial role
                    in long-term savings and retirement planning. Understanding PF contribution
                    helps employees plan their finances better and estimate take-home salary
                    accurately.
                </p>

                <p className="text-sm mt-4">
                    You can combine this with our{" "}
                    <a href="/in-hand-salary-calculator" className="text-blue-600">
                        In-Hand Salary Calculator
                    </a>{" "}
                    to see how PF affects your monthly take-home pay.
                </p>
            </section>



            <p className="text-xs text-gray-500 mt-6">
                Disclaimer: PF calculation is indicative and may vary by company policy.
            </p>
        </div>

    );
}
