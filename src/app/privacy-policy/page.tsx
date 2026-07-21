import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Solar Spectrum',
  description: 'Read Solar Spectrum privacy and cookie policy details for website usage and data handling.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Privacy Policy</p>
        <h1 className="text-4xl font-extrabold text-slate-900">Cookie and Data Privacy at Solar Spectrum</h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-700">
          Solar Spectrum uses cookies to deliver a seamless browsing experience, personalise content, provide social media features, and analyse traffic. We prioritise transparent data handling, and you can manage your cookie preferences through the consent banner on our website.
        </p>
        <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">What cookies do we use?</h2>
          <p className="text-base leading-7 text-slate-700">
            We may use essential cookies required for site functionality as well as analytics cookies to understand how visitors interact with our pages. No personal data is shared without your consent.
          </p>
          <ul className="list-disc space-y-2 pl-5 text-slate-700">
            <li><strong>Essential cookies:</strong> keep the website working correctly.</li>
            <li><strong>Performance cookies:</strong> help us improve page speed and stability.</li>
            <li><strong>Preference cookies:</strong> remember your choices and settings.</li>
          </ul>
          <p className="text-base leading-7 text-slate-700">
            You can also choose to reject non-essential cookies at any time from the banner and review this policy as needed.
          </p>
        </section>
        <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-lg">
          <h2 className="text-2xl font-semibold">Need help?</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-200">
            If you have any questions about cookies or data privacy, feel free to contact our team. We are committed to helping you stay informed and in control.
          </p>
          <Link href="/contact" className="mt-6 inline-flex rounded-full bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-500">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
