import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Gamepad2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6 font-satoshi">
            <Gamepad2 /> World's First Real Time Cooperative FPV RC Racing
          </Badge>
          <h1 className="font-integral text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
            First Real Time Cooperative{" "}
            <span className="text-primary">FPV RC Car Racing</span> Online
          </h1>
          <p className="font-satoshi text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Take control of a real RC car from anywhere in the world.
          </p>
          <Link href="/#support">
            <Button size="lg" className="font-integral text-lg px-8 py-6">
              Race Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
