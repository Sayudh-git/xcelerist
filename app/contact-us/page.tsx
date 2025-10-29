import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowLeft, Send } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Xcelerist",
  description:
    "Reach out to the Xcelerist team. This page currently includes a placeholder contact form.",
};

export default function ContactUsPage() {
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

          <Card className="border-border/70 bg-card/60 backdrop-blur">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>
                Tell us how we can help and a member of the team will get in touch shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                action="#"
                method="post"
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Jane Doe"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Share a few details about your inquiry..."
                    className="w-full rounded-3xl border border-input bg-transparent px-4 py-3 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>

                <Button type="submit" className="inline-flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}

