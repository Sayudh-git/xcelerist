import { ArrowUpRight, Forward } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatedGridPattern } from "./ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function CTABanner() {
  return (
    <div className="px-6">
      <div className="dark:border relative overflow-hidden my-20 w-full dark bg-background text-foreground max-w-screen-lg mx-auto rounded-2xl py-10 md:py-16 px-6 md:px-14">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_right,white,rgba(255,255,255,0.6),transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_top_left,white,rgba(255,255,255,0.6),transparent)]",
            "inset-x-0 inset-y-0 h-[200%] skew-y-12"
          )}
        />
        <div className="relative z-0 flex flex-col gap-3">
          <h3 className="text-3xl md:text-4xl font-semibold">
            Ready to Outsmart Your Competition?
          </h3>
          <p className="mt-2 text-base md:text-lg">
            Stop leaving revenue on the table. It&apos;s time to transform your GTM strategy with data intelligence that actually works. Let&apos;s build your unfair advantage.
          </p>
        </div>
        <div className="relative z-0 mt-14 flex flex-col sm:flex-row gap-4">
          <Button size="lg">
            Talk to Our Founder. <ArrowUpRight className="!h-5 !w-5" />
          </Button>
          <Button size="lg" variant="outline">
            Check Pricing <Forward className="!h-5 !w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
