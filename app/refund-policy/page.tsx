import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Xcelerist",
  description:
    "Review Xcelerist’s refund and cancellation terms for engagements and services.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 sm:px-6">
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
              Refund Policy
            </h1>
            <p className="text-sm italic text-muted-foreground">
              Last updated: October 29, 2025
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              We aim to be fair and transparent. Because our work is largely
              time-based and customized, refunds are limited as follows.
            </p>
          </header>

          <section className="space-y-8 text-base leading-relaxed text-muted-foreground">
            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                1) Advisory sessions &amp; consultations
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Scheduling:</strong> You may reschedule once per session with{" "}
                  <strong>≥24 hours’ notice</strong> at no charge.
                </li>
                <li>
                  <strong>Cancellations:</strong>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      ≥72 hours before the session: <strong>100% refund</strong>.
                    </li>
                    <li>
                      72 to 24 hours before: <strong>50% refund</strong> (or full credit
                      to reschedule within 30 days).
                    </li>
                    <li>
                      &lt;24 hours or no-show: <strong>no refund</strong> (you may still
                      request a paid reschedule).
                    </li>
                  </ul>
                </li>
              </ul>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                2) Fixed-fee projects
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Unless otherwise agreed, a <strong>50% deposit</strong> is due at
                  kickoff and is <strong>non-refundable after kickoff</strong>.
                </li>
                <li>
                  If you terminate early without cause, we will refund any{" "}
                  <strong>unused, unearned</strong> portion of fees <strong>net of</strong>{" "}
                  (a) work already performed (at our standard hourly rates), and (b)
                  non-recoverable third-party costs approved by you.
                </li>
              </ul>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                3) Retainers / ongoing services
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Retainers may be canceled with <strong>30 days’ written notice</strong>.
                  Service continues through the notice period.
                </li>
                <li>
                  Fees already paid for elapsed periods are <strong>non-refundable</strong>.
                </li>
                <li>
                  Any prepaid, unused time after the 30-day notice period will be{" "}
                  <strong>refunded or credited</strong> at your choice.
                </li>
              </ul>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                4) Digital assets &amp; templates
              </h2>
              <p>
                Digital assets, documents, or templates delivered to you are{" "}
                <strong>non-refundable</strong> once access is granted.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                5) Third-party tools and data providers
              </h2>
              <p>
                Fees paid to third-party platforms (e.g., <strong>Clay.com</strong>,
                CRMs, enrichment/data vendors) are <strong>non-refundable</strong> and
                outside our control. You must cancel those services directly with the
                provider.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                6) Force majeure or outages
              </h2>
              <p>
                If a material outage or force majeure event makes delivery impossible,
                we will work with you in good faith to{" "}
                <strong>credit, reschedule, or pro-rate</strong> as appropriate.
              </p>
            </article>

            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                7) How to request a refund
              </h2>
              <p>
                Email <strong>billing@xcelerist.com</strong> with your Order details and
                reason within <strong>30 days</strong> of the relevant charge. Approved
                refunds are typically processed to the original payment method.
              </p>
              <p>
                This policy does not affect any statutory rights you may have under
                applicable law.
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

