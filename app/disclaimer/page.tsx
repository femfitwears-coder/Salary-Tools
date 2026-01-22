export const metadata = {
  title: "Disclaimer | Salary Tools India",
  description:
    "Disclaimer for Salary Tools India regarding salary, tax, and PF calculations.",
};

export default function Disclaimer() {
  return (
    <main className="page-wrapper">
      <h1 className="page-title">Disclaimer</h1>

      <p className="text-sm text-gray-600 leading-relaxed">
        The information provided by Salary Tools India is for general
        informational purposes only. All calculators on this website provide
        approximate estimations based on standard assumptions.
      </p>

      <p className="text-sm text-gray-600 leading-relaxed mt-4">
        Salary, tax, and Provident Fund calculations may vary depending on
        company policies, government regulations, and individual financial
        circumstances. We do not guarantee the accuracy or completeness of any
        information provided.
      </p>

      <p className="text-sm text-gray-600 leading-relaxed mt-4">
        Users are advised to consult with a qualified professional before
        making any financial decisions. Salary Tools India shall not be held
        liable for any losses or damages arising from the use of this website.
      </p>
    </main>
  );
}
