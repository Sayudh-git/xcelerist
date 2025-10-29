import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Xcelerist",
  description:
    "Review the Terms & Conditions that govern your engagement with Xcelerist.",
};

export default function TermsAndConditionsPage() {
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

          <header className="space-y-2">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Terms &amp; Conditions
            </h1>
            <p className="text-sm italic text-muted-foreground">
              Last updated: October 29, 2025
            </p>
          </header>

          <section className="space-y-10 text-base leading-relaxed text-muted-foreground">
            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                1) Who we are
              </h2>
              <p>
                These Terms &amp; Conditions (“Terms”) govern your access to and use of
                services provided by <strong>Xcelerist</strong> (“Xcelerist,” “we,” “us,”
                or “our”), a GTM engineering and strategy consultancy. Address:
                <strong> 5 Penn Plaza, 14th Floor, New York, NY 10001, US</strong>.
              </p>
              <p>
                By accessing our website (https://xcelerist.com) or engaging our
                services, you agree to these Terms. If you are using our services on
                behalf of a company, you represent that you are authorized to accept
                these Terms for that company.
              </p>
              <blockquote className="border-l-2 border-border pl-4 text-sm">
                <strong>Contact:</strong> legal@xcelerist.com (general legal),
                billing@xcelerist.com (billing), hello@xcelerist.com (sales/support).
              </blockquote>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                2) Scope of services
              </h2>
              <p>
                We provide GTM (go-to-market) engineering and strategy services,
                including but not limited to: funnel and pipeline design, data
                enrichment, RevOps architecture, outbound and lifecycle automation,
                analytics instrumentation, experimentation, and implementation/
                enablement across third-party tools (e.g., <strong>Clay.com</strong>,
                CRM/marketing automation, data providers, CDPs, messaging platforms).
              </p>
              <p>
                Deliverables may include advisory memos, playbooks, designs,
                dashboards, automations, connectors, scripts, and configuration of
                third-party tools in your environment.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                3) Engagement model
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Advisory/consulting hours</strong> (time &amp; materials),
                  <strong> fixed-fee projects</strong>, and/or <strong>retainers</strong>
                  are defined in your order form, SOW, or email confirmation (each, an
                  “Order”).
                </li>
                <li>
                  <strong>Kickoff</strong> occurs upon written confirmation and initial
                  payment (if applicable).
                </li>
                <li>
                  <strong>Change requests</strong> that affect scope, timeline, or cost
                  require mutual written approval.
                </li>
              </ul>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                4) Your responsibilities
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Provide timely access to stakeholders, systems, and accurate
                  information.
                </li>
                <li>
                  Maintain valid licenses for any third-party tools (e.g.,
                  Clay.com) and pay associated fees directly unless otherwise agreed in
                  writing.
                </li>
                <li>
                  Ensure any leads, lists, or data you provide were collected and can
                  be processed in compliance with applicable laws (e.g., CAN-SPAM,
                  CASL, GDPR/UK-GDPR, CPRA, ePrivacy).
                </li>
                <li>
                  Keep backups of your systems and data. We are not responsible for
                  pre-existing defects or data loss in your environment.
                </li>
              </ul>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                5) Third-party tools &amp; data providers
              </h2>
              <p>
                We frequently integrate with third-party platforms and data
                providers you select. Those services are governed by their own terms
                and privacy policies. We do not control or guarantee their
                availability, performance, pricing, data accuracy, or compliance. Any
                changes, outages, or policy shifts by third parties are outside our
                control and may affect timelines or outcomes.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                6) Fees, expenses, and taxes
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  You agree to pay fees as set forth in your Order. Unless otherwise
                  stated, invoices are due <strong>Net 14</strong> days. Late amounts
                  may accrue <strong>1.5% per month (or the maximum allowed by law)</strong>.
                </li>
                <li>
                  Reasonable, pre-approved out-of-pocket expenses (e.g., travel) are
                  billable.
                </li>
                <li>
                  Fees are exclusive of taxes. You are responsible for all applicable
                  taxes other than our income taxes.
                </li>
              </ul>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                7) Scheduling, rescheduling, and no-shows
              </h2>
              <p>
                You may reschedule sessions with <strong>≥24 hours’ notice</strong> at
                no charge (one free reschedule per session). Sessions canceled with{" "}
                <strong>&lt;24 hours’ notice</strong> or no-shows may be forfeited or
                billed in full.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                8) Intellectual property
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Your Materials.</strong> You retain ownership of content,
                  data, and trademarks you provide. You grant us a limited license to
                  use them solely to perform the services.
                </li>
                <li>
                  <strong>Our Tools/Know-how.</strong> We retain ownership of our
                  pre-existing and generic frameworks, scripts, templates, methods,
                  and know-how.
                </li>
                <li>
                  <strong>Deliverables.</strong> Upon full payment, you receive a
                  worldwide, perpetual, non-exclusive license to use the deliverables
                  for your internal business purposes. If your Order states that
                  deliverables are “work made for hire” or assigns IP, that Order
                  controls.
                </li>
                <li>
                  We may reuse generalized learnings and de-identified patterns.
                </li>
              </ul>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                9) Confidentiality
              </h2>
              <p>
                Each party will protect the other’s non-public information with
                reasonable care and use it only to perform or receive the services.
                Exceptions apply for information that is public, independently
                developed, or rightfully obtained from a third party. If legally
                required to disclose, a party will provide prompt notice (where
                lawful).
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                10) Data protection &amp; outreach compliance
              </h2>
              <p>
                We act as an independent controller or a processor depending on the
                engagement. If needed, a Data Processing Addendum (DPA) will govern
                processor relationships. You are responsible for lawful outreach and
                marketing practices, including consent management, suppression lists,
                opt-outs, honoring GPC signals where applicable, and domain/warm-up
                hygiene.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                11) AI, automation, and experimental features
              </h2>
              <p>
                We may use automation, APIs, and AI/ML tools to implement or
                accelerate workflows you approve. You are responsible for final human
                review of outreach or content prior to sending. Experimental or beta
                features are provided “as is” with no warranties.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                12) Publicity
              </h2>
              <p>
                With your prior written consent (email is sufficient), we may
                reference your name and logo as a customer and describe the engagement
                at a high level. You may revoke consent at any time.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                13) Warranties &amp; disclaimers
              </h2>
              <p>
                We warrant that we will perform services in a professional and
                workmanlike manner. <strong>Except as expressly stated, the services and
                deliverables are provided “AS IS.”</strong> We do not warrant outcomes
                (e.g., revenue, response, conversion, or deliverability results) or
                third-party services.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                14) Limitation of liability
              </h2>
              <p>
                To the maximum extent permitted by law, neither party will be liable
                for any indirect, incidental, special, consequential, exemplary, or
                punitive damages, nor for lost profits, revenue, goodwill, or data,
                even if advised of the possibility. Except for payment obligations,
                misuse of IP, or breach of confidentiality, each party’s aggregate
                liability under these Terms will not exceed the fees paid or payable to
                us for the <strong>three (3) months</strong> preceding the event giving rise
                to liability.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                15) Indemnification
              </h2>
              <p>
                You will indemnify and hold us harmless from claims arising out of (a)
                your content or data; (b) your unlawful outreach or failure to obtain
                necessary consents; or (c) your breach of these Terms. We will
                indemnify you against third-party claims alleging that our deliverables
                (as provided by us) infringe a U.S. intellectual property right, except
                to the extent caused by your modifications, combinations, or
                instructions.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                16) Term, termination, and suspension
              </h2>
              <p>
                These Terms apply while you use our website or services. Either party
                may terminate an Order for cause if the other party materially breaches
                and fails to cure within <strong>15 days</strong> of notice. We may suspend
                work for non-payment. Upon termination, you will pay for services
                performed and approved expenses incurred through the effective date.
                Sections intended to survive (e.g., fees, confidentiality, IP,
                warranties, liability, indemnities, governing law) will survive.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                17) Export, sanctions, and anti-corruption
              </h2>
              <p>
                You represent that you are not on any U.S. or other government
                sanctions list and will not use the services in violation of export
                controls. Each party will comply with applicable anti-bribery and
                anti-corruption laws.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                18) Independent contractor
              </h2>
              <p>
                We perform as an independent contractor; no partnership, joint
                venture, franchise, or employment relationship is created.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                19) Governing law; venue
              </h2>
              <p>
                These Terms and any dispute arising out of them are governed by the
                laws of the <strong>State of New York</strong>, without regard to conflict of
                laws rules. Exclusive jurisdiction and venue lie in the state or
                federal courts located in <strong>New York County, New York</strong>.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                20) Changes to these Terms
              </h2>
              <p>
                We may update these Terms from time to time. Material changes will be
                indicated by updating the “Last updated” date above. Continued use
                constitutes acceptance.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                21) Entire agreement
              </h2>
              <p>
                These Terms, together with your Order(s) and any DPA, constitute the
                entire agreement and supersede prior proposals and understandings on
                the subject matter.
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
