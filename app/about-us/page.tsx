import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Xcelerist",
  description:
    "Learn about Xcelerist’s GTM engineering focus, how we partner with teams, and who we serve.",
};

export default function AboutUsPage() {
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
              About Us
            </h1>
            <p className="text-sm italic text-muted-foreground">
              Last updated: October 29, 2025
            </p>
          </header>

          <section className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <article className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">
                Xcelerist — GTM Engineering that ships
              </h2>
              <p>
                <strong>Xcelerist</strong> is a GTM engineering and strategy partner for
                fast-moving teams. We design, build, and scale the systems that power
                revenue: data pipelines, enrichment, routing, outbound and lifecycle
                automation, experiment frameworks, and analytics—often orchestrated with
                tools like <strong>Clay.com</strong> alongside your CRM, MAP, and data
                stack.
              </p>
            </article>

            <article className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">What we do</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>GTM architecture &amp; RevOps:</strong> Funnel design, lead
                  scoring/routing, attribution, MQL/SQL definitions, handoffs.
                </li>
                <li>
                  <strong>Automation &amp; orchestration:</strong> Multi-step workflows
                  across CRMs, email/SMS, enrichment, and data warehouses.
                </li>
                <li>
                  <strong>Outbound engines:</strong> Research, personalization logic,
                  sequencing, deliverability, and testing.
                </li>
                <li>
                  <strong>Analytics &amp; experimentation:</strong> Instrumentation,
                  dashboards, cohorting, A/B and holdout designs.
                </li>
                <li>
                  <strong>Advisory &amp; enablement:</strong> Playbooks, trainings,
                  audits, and hands-on implementation.
                </li>
              </ul>
            </article>

            <article className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">How we work</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Strategy → build → handoff.</strong> We align on outcomes,
                  then ship working systems—not just slides.
                </li>
                <li>
                  <strong>Tool-agnostic.</strong> We integrate with your stack and help
                  you choose the right vendors.
                </li>
                <li>
                  <strong>Compliance-minded.</strong> We design for consent, suppression,
                  opt-outs, and auditability.
                </li>
              </ul>
            </article>

            <article className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                Who we partner with
              </h3>
              <p>
                B2B SaaS, marketplaces, and services businesses from seed to public—
                marketing, sales, RevOps, and product teams that value speed with rigor.
              </p>
            </article>

            <blockquote className="border-l-2 border-border pl-4 text-sm text-muted-foreground">
              <strong>HQ:</strong> 5 Penn Plaza, 14th Floor, New York, NY 10001, US
              <br />
              <strong>Contact:</strong> hello@xcelerist.com
            </blockquote>

            <footer className="border-t border-border pt-6 text-sm text-muted-foreground">
              —
            </footer>
          </section>
        </div>
      </main>
    </>
  );
}
