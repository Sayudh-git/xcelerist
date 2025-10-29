import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Xcelerist",
  description:
    "Understand how Xcelerist collects, uses, and protects personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-24">
        <div className="mx-auto flex max-w-4xl flex-col gap-8 px-4 sm:px-6">
          <Button
            asChild
            variant="ghost"
            className="w-fit items-center gap-2 rounded-full px-4 py-2 text-sm"
          >
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <header className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-sm italic text-muted-foreground">
              Last updated: October 29, 2025
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              We respect your privacy. This Privacy Policy explains how{" "}
              <strong>Xcelerist</strong> (“we,” “us,” “our”) collects, uses, and shares
              information when you visit <strong>https://xcelerist.com</strong> (the
              “Site”), contact us, or engage our services.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              <strong>Data Controller:</strong> Xcelerist, 5 Penn Plaza, 14th Floor, New
              York, NY 10001, US
              <br />
              <strong>Contact for privacy matters:</strong> privacy@xcelerist.com
            </p>
          </header>

          <section className="space-y-10 text-base leading-relaxed text-muted-foreground">
            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                1) Information we collect
              </h2>
              <h3 className="text-lg font-semibold text-foreground">
                a) You provide
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Identity and contact data (name, email, title, company, phone,
                  address).
                </li>
                <li>
                  Account and billing details (purchase records, tax/VAT info, billing
                  contact).
                </li>
                <li>
                  Project materials (briefs, datasets, content, access credentials you
                  authorize).
                </li>
                <li>
                  Communications (emails, chat, meeting notes; recordings only with
                  notice/consent).
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground">
                b) Collected automatically
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Device/usage data (IP address, approximate location, device
                  identifiers, pages viewed, time on page, referring URLs).
                </li>
                <li>
                  Cookies and similar technologies for essential site functions,
                  analytics, and, where enabled, marketing.
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground">
                c) From third parties (as instructed by you)
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Platforms and tools you connect (e.g., <strong>Clay.com</strong>,
                  CRM/MAP, analytics, data providers).
                </li>
                <li>
                  Public/prospect data you lawfully supply or permit us to enrich.
                </li>
              </ul>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                2) How we use information
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Provide and improve our services and Site; set up and maintain
                  integrations.
                </li>
                <li>
                  Communicate about projects, billing, updates, and security notices.
                </li>
                <li>
                  Configure and operate automations and outreach you authorize.
                </li>
                <li>
                  Detect and prevent fraud, abuse, security incidents, and spam.
                </li>
                <li>
                  Comply with legal obligations and enforce our agreements.
                </li>
                <li>
                  With your consent, send marketing communications (you can opt out
                  anytime).
                </li>
              </ul>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                3) Legal bases (EEA/UK where applicable)
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Contract necessity</strong> (to perform our services).
                </li>
                <li>
                  <strong>Legitimate interests</strong> (to secure, improve, and market
                  our services in a proportionate manner).
                </li>
                <li>
                  <strong>Consent</strong> (for certain cookies/marketing or call
                  recordings).
                </li>
                <li>
                  <strong>Legal obligation</strong> (tax, accounting, compliance).
                </li>
              </ul>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                4) Sharing of information
              </h2>
              <p>
                We share information with:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Service providers / processors</strong> (e.g., hosting, email,
                  analytics, payment/billing, document storage, communications,
                  security).
                </li>
                <li>
                  <strong>Third-party platforms you connect</strong> (e.g., Clay.com,
                  CRMs, enrichment/data vendors) as part of your instructed workflows.
                </li>
                <li>
                  <strong>Professional advisors</strong> (lawyers, accountants), and{" "}
                  <strong>authorities</strong> when legally required.
                </li>
                <li>
                  <strong>Business transfers</strong> (e.g., merger, acquisition) subject
                  to this Policy’s protections.
                </li>
              </ul>
              <p>
                We do <strong>not</strong> sell your personal information. If we “share”
                (as defined under CPRA) for cross-context behavioral advertising, you
                may opt out (see “Your choices”).
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                5) International data transfers
              </h2>
              <p>
                We are U.S.-based. If we transfer personal data from the EEA/UK/
                Switzerland, we rely on appropriate safeguards such as the{" "}
                <strong>Standard Contractual Clauses (SCCs)</strong> or equivalent lawful
                mechanisms, coupled with supplemental measures where needed.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                6) Retention
              </h2>
              <p>We keep personal data only as long as necessary for the purposes above:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Project files: typically <strong>up to 24 months</strong> after
                  engagement end (unless you request earlier deletion or longer retention is required by law).
                </li>
                <li>
                  Billing/transaction records: <strong>7 years</strong> (or as required by
                  law).
                </li>
                <li>
                  Marketing contacts: until you opt out or we delete inactive records.
                </li>
              </ul>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                7) Security
              </h2>
              <p>
                We use administrative, technical, and physical safeguards appropriate to
                the nature of the data. No method of transmission or storage is 100%
                secure.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                8) Your rights
              </h2>
              <p>
                Depending on your location, you may have rights to{" "}
                <strong>access, correct, delete, restrict or object</strong>,{" "}
                <strong>port</strong>, or <strong>withdraw consent</strong>.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>EEA/UK/Swiss:</strong> you may lodge a complaint with your
                  local supervisory authority.
                </li>
                <li>
                  <strong>California:</strong> you may request access/portability and
                  deletion, and opt out of “sharing” for cross-context behavioral
                  advertising. We do not sell personal information. Authorized agents
                  may submit requests.
                </li>
                <li>
                  <strong>How to exercise:</strong> email privacy@xcelerist.com. We may
                  verify your request before acting.
                </li>
              </ul>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                9) Cookies &amp; similar technologies
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Types:</strong> strictly necessary, functional, analytics, and
                  (if enabled) advertising.
                </li>
                <li>
                  <strong>Controls:</strong> you can manage preferences via our cookie
                  banner (where shown) and your browser settings. Blocking some cookies
                  may impact Site functionality.
                </li>
                <li>
                  <strong>Do Not Track / GPC:</strong> where legally required, we honor
                  Global Privacy Control signals as an opt-out of “sale/share” under
                  CPRA.
                </li>
              </ul>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                10) Children’s privacy
              </h2>
              <p>
                Our Site and services are not directed to children. We do not knowingly
                collect personal information from anyone under <strong>16</strong> (or{" "}
                <strong>13</strong> in the U.S.). If you believe a child provided data,
                contact us to delete it.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                11) Third-party links and services
              </h2>
              <p>
                Our Site may link to external sites and services. Their privacy
                practices are governed by their own policies. We do not control and are
                not responsible for third-party privacy practices.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                12) Changes to this Policy
              </h2>
              <p>
                We may update this Policy. Material changes will be announced on this
                page with an updated “Last updated” date.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                13) Contact
              </h2>
              <p>
                Questions or requests: <strong>privacy@xcelerist.com</strong>
                <br />
                Postal: <strong>Xcelerist, 5 Penn Plaza, 14th Floor, New York, NY 10001, US</strong>
              </p>
            </article>

            <footer className="border-t border-border pt-6 text-sm text-muted-foreground">
              —
            </footer>
          </section>
        </div>
      </main>
    </>
  );
}

