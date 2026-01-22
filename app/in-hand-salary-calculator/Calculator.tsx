"use client";

import { useState } from "react";

export default function Calculator() {
  const [ctc, setCtc] = useState(0);
  const [basicPercent, setBasicPercent] = useState(40);
  const [hraPercent, setHraPercent] = useState(50);
  const [pfEnabled, setPfEnabled] = useState(true);
  const [regime, setRegime] = useState("new");

  const basicAnnual = (ctc * basicPercent) / 100;
  const hraAnnual = (basicAnnual * hraPercent) / 100;
  const pfAnnual = pfEnabled ? basicAnnual * 0.12 : 0;
  const grossAnnual = basicAnnual + hraAnnual;
  const estimatedTax =
    regime === "new" ? grossAnnual * 0.08 : grossAnnual * 0.1;

  const inHandAnnual = grossAnnual - pfAnnual - estimatedTax;
  const inHandMonthly = inHandAnnual / 12;

  return (
    <div className="calculator-grid">
      {/* INPUT CARD */}
      <div className="card">
        <h2 className="card-title">Salary Details</h2>

        <div className="form-group">
          <label className="form-label">Annual CTC (₹)</label>
          <input
            type="number"
            className="form-input"
            value={ctc}
            onChange={(e) => setCtc(Number(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Basic Salary (%)</label>
          <input
            type="number"
            className="form-input"
            value={basicPercent}
            onChange={(e) => setBasicPercent(Number(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label className="form-label">HRA (% of Basic)</label>
          <input
            type="number"
            className="form-input"
            value={hraPercent}
            onChange={(e) => setHraPercent(Number(e.target.value))}
          />
        </div>

        <div className="checkbox-row">
          <input
            type="checkbox"
            checked={pfEnabled}
            onChange={() => setPfEnabled(!pfEnabled)}
          />
          <span>PF Deduction (12%)</span>
        </div>

        <div className="form-group">
          <label className="form-label">Tax Regime</label>
          <select
            className="form-select"
            value={regime}
            onChange={(e) => setRegime(e.target.value)}
          >
            <option value="new">New Tax Regime</option>
            <option value="old">Old Tax Regime</option>
          </select>
        </div>
      </div>

      {/* RESULT CARD */}
      <div className="card result-card">
        <h2 className="card-title">Your In-Hand Salary</h2>

        <div className="result-main">
          ₹{isNaN(inHandMonthly) ? 0 : inHandMonthly.toFixed(0)}
        </div>

        <div className="result-row">
          Annual Take Home: ₹{isNaN(inHandAnnual) ? 0 : inHandAnnual.toFixed(0)}
        </div>

        <div className="result-row">
          PF Deduction: ₹{isNaN(pfAnnual) ? 0 : pfAnnual.toFixed(0)}
        </div>

        <div className="result-row">
          Estimated Tax: ₹{isNaN(estimatedTax) ? 0 : estimatedTax.toFixed(0)}
        </div>
      </div>
    </div>
  );
}
