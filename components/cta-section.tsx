import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 checkered-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-integral text-3xl md:text-4xl font-bold mb-6">
            Ready to race?
          </h2>
          <Link href="/#support">
            <Button
              size="lg"
              variant="secondary"
              className="font-integral text-lg px-8 py-6"
            >
              Join the Next Race
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
