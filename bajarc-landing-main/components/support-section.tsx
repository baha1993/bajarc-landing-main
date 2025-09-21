import { Button } from "@/components/ui/button";
import { Map, TvIcon, Wrench } from "lucide-react";
import Link from "next/link";

export function SupportSection() {
  return (
    <section id="support" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-integral text-3xl md:text-4xl font-bold mb-6">
            Support the Race — Get in the Driver's Seat
          </h2>
          <p className="font-satoshi text-lg text-muted-foreground mb-12 leading-relaxed">
            This project runs on community support. A small donation gets you
            the chance to control a real RC car and join a live race.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl mb-3 flex items-center justify-center">
                <Wrench size={48} />
              </div>
              <h3 className="font-integral text-lg font-semibold mb-2">
                Upgrading the cars
              </h3>
              <p className="font-satoshi text-sm text-muted-foreground">
                Better performance and reliability
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3 flex items-center justify-center">
                <Map size={48} />
              </div>
              <h3 className="font-integral text-lg font-semibold mb-2">
                Building new race maps
              </h3>
              <p className="font-satoshi text-sm text-muted-foreground">
                More tracks and challenges
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3 flex items-center justify-center">
                <TvIcon size={48} />
              </div>
              <h3 className="font-integral text-lg font-semibold mb-2">
                Improving live streams
              </h3>
              <p className="font-satoshi text-sm text-muted-foreground">
                Higher quality FPV experience
              </p>
            </div>
          </div>

          <p className="font-satoshi text-lg mb-8">
            Be part of the world's first cooperative FPV RC racing community!
          </p>
          <Link href="/donate">
            <Button size="lg" className="font-integral">
              Support
              <span className="font-satoshi font-bold pt-0.5 m-0 p-0">&</span>
              Race
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
