import { Card, CardContent } from "@/components/ui/card";
import { Clock, Gamepad2 } from "lucide-react";
import Image from "next/image";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="font-integral text-3xl md:text-4xl font-bold mb-6">
            Drive a real RC car from your screen
          </h2>
          <p className="font-satoshi text-lg text-muted-foreground leading-relaxed">
            No downloads. No simulators. Just you, the track, and a real RC
            car—streamed directly to your device.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-integral font-bold text-lg z-20">
                1
              </div>
              <Card className="text-center p-6 pt-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4 flex items-center justify-center text-primary">
                    <Image
                      src="/racecar.svg"
                      alt="Race car icon"
                      height={64}
                      width={64}
                    />
                  </div>
                  <h3 className="font-integral text-xl font-semibold mb-3">
                    Pick your car
                  </h3>
                  <p className="font-satoshi text-muted-foreground">
                    Choose from our fleet of high-performance RC cars
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-integral font-bold text-lg z-20">
                2
              </div>
              <Card className="text-center p-6 pt-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4 flex items-center justify-center">
                    <Clock size={48} />
                  </div>
                  <h3 className="font-integral text-xl font-semibold mb-3">
                    Wait for an opponent
                  </h3>
                  <p className="font-satoshi text-muted-foreground">
                    Get matched with racers from around the world
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-integral font-bold text-lg z-20">
                3
              </div>
              <Card className="text-center p-6 pt-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4 flex items-center justify-center">
                    <Gamepad2 size={48} />
                  </div>
                  <h3 className="font-integral text-xl font-semibold mb-3">
                    Control <span className="font-satoshi">&</span> compete
                  </h3>
                  <p className="font-satoshi text-muted-foreground">
                    Race in real-time with live FPV streaming
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
