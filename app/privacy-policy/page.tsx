export const metadata = {
  title: "Privacy Policy | Salary Tools India",
  description:
    "Privacy policy for Salary Tools India explaining how user data is handled and protected.",
};

export default function PrivacyPolicy() {
  return (
    <main className="page-wrapper">
      <h1 className="page-title">Privacy Policy</h1>
      <p className="page-subtitle">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <p className="text-sm text-gray-600 leading-relaxed">
        At Salary Tools India, we respect your privacy. This website provides
        free salary and finance calculators to help users estimate salary,
        Provident Fund, and related financial figures.
      </p>

      <p className="text-sm text-gray-600 leading-relaxed mt-4">
        We do not collect personal information such as name, email address, or
        phone number. Any data you enter into our calculators is processed only
        within your browser and is not stored on our servers.
      </p>

      <p className="text-sm text-gray-600 leading-relaxed mt-4">
        We may use third-party services such as Google Analytics or Google
        AdSense in the future to understand website usage and display
        advertisements. These services may use cookies in accordance with their
        respective privacy policies.
      </p>

      <p className="text-sm text-gray-600 leading-relaxed mt-4">
        By using this website, you agree to this privacy policy. If you have any
        questions, please discontinue use of the site.
      </p>
    </main>
  );
}
