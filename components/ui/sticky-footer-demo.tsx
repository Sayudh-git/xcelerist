import StickyFooter from "./sticky-footer";
import CTABanner from "../cta-banner";

const DemoOne = () => {
  return (
    <main className="bg-background text-foreground">
      {/* Main Content */}
      <CTABanner />
      <StickyFooter />
    </main>
  );
};

export { DemoOne };