import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - BAJARC",
  description:
    "Terms of Service and Disclaimer for BAJARC - Real-time FPV RC car racing platform",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8 md:p-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-stone-900 mb-4 text-balance">
              Terms & Conditions / Disclaimer
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed">
              Welcome to BajaRC.me — the first real-time cooperative FPV RC car
              racing experience. By participating, donating, or accessing this
              site, you agree to the following terms:
            </p>
          </div>

          <div className="space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </span>
                Entertainment Purpose Only
              </h2>
              <p className="text-stone-700 leading-relaxed">
                BajaRC is an experimental, community-driven project created for
                entertainment. All races involve remote control of real RC cars
                streamed live online.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </span>
                Donations & Access
              </h2>
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p>Donations are voluntary and non-refundable.</p>
                <p>
                  As a thank-you for supporting the channel, donors may receive
                  temporary access to control an RC car during a live race.
                </p>
                <p>
                  Donations go directly toward improving the project (cars,
                  maps, and stream equipment).
                </p>
                <p>All donations are processed securely through PayPal.</p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </span>
                Availability
              </h2>
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p>
                  Currently, only two (2) RC cars are available for live racing.
                </p>
                <p>
                  Access may be limited, and wait times can occur depending on
                  demand.
                </p>
                <p>We do not guarantee uninterrupted access or availability.</p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </span>
                Technical Disclaimer
              </h2>
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p>
                  This project depends on live internet streaming and
                  third-party platforms (Twitch, YouTube, Kick).
                </p>
                <p>
                  We are not responsible for delays, interruptions, crashes, or
                  technical issues that may occur.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  5
                </span>
                Liability
              </h2>
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p>By participating, you acknowledge and accept that:</p>
                <p>
                  BajaRC is not responsible for any damages, losses, or claims
                  arising from your participation.
                </p>
                <p>
                  Control of the RC cars is provided "as-is" with no guarantees.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  6
                </span>
                Age Requirement
              </h2>
              <p className="text-stone-700 leading-relaxed">
                Participants must be at least 13 years old, or have
                parental/guardian consent if under 18.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  7
                </span>
                Platform Use
              </h2>
              <p className="text-stone-700 leading-relaxed">
                BajaRC streams live video through third-party platforms (Twitch,
                YouTube, Kick). We are not affiliated with or endorsed by these
                platforms, and their terms of service also apply.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  8
                </span>
                Updates to Terms
              </h2>
              <p className="text-stone-700 leading-relaxed">
                These terms may be updated at any time without prior notice.
                Continued use of the site or participation in races means you
                accept the current terms.
              </p>
            </section>
          </div>

          {/* Footer CTA */}
          <div className="mt-12 pt-8 border-t border-stone-200">
            <div className="text-center">
              <p className="text-stone-600 mb-6">
                Have questions about these terms? Contact us through our live
                streams or social media.
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                <span>🏁</span>
                Back to Racing
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
