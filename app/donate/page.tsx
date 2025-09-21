"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Camera,
  ChartNoAxesGanttIcon,
  Lightbulb,
  LucideFlag,
  Share,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function DonatePage() {
  const [selectedDonation, setSelectedDonation] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20 py-16">
        <div className="absolute inset-0 checkered-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-integral text-4xl md:text-5xl font-bold mb-4">
              SUPPORT <span className="text-primary">BAJARC</span>
            </h1>
            <p className="font-satoshi text-lg text-muted-foreground max-w-2xl mx-auto">
              Help us keep the RC cars racing and improve the platform for
              everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <Card className="p-8">
              <CardHeader className="px-0 pb-6">
                <CardTitle className="font-integral text-2xl">
                  Make a Donation
                </CardTitle>
                <p className="font-satoshi text-muted-foreground">
                  Choose an amount to support BajaRC development and operations.
                </p>
              </CardHeader>
              <CardContent className="px-0">
                <form className="space-y-6">
                  {/* Preset Amounts */}
                  <div>
                    <label className="font-satoshi text-sm font-medium mb-3 block">
                      Select Amount
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                      {[5, 10, 25, 50].map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          className={
                            "p-3 border border-border rounded-lg font-satoshi font-medium hover:border-primary hover:bg-primary/5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 " +
                            (selectedDonation === amount
                              ? "bg-primary/10 border-primary"
                              : "bg-background")
                          }
                          onClick={() => {
                            if (selectedDonation === amount) {
                              setSelectedDonation(null);
                            } else {
                              setSelectedDonation(amount);
                            }
                          }}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount */}
                  <div>
                    <label className="font-satoshi text-sm font-medium mb-2 block">
                      Custom Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 font-satoshi text-muted-foreground">
                        $
                      </span>
                      <input
                        value={selectedDonation ?? ""}
                        onChange={(e) =>
                          setSelectedDonation(
                            e.target.value ? parseFloat(e.target.value) : null
                          )
                        }
                        type="number"
                        placeholder="0.00"
                        min="1"
                        step="0.01"
                        className="w-full pl-8 pr-3 py-2 border border-border rounded-md bg-background font-satoshi text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>

                  {/* Donor Information */}
                  <div className="space-y-4">
                    <div>
                      <label className="font-satoshi text-sm font-medium mb-2 block">
                        Name (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="Your name for recognition"
                        className="w-full px-3 py-2 border border-border rounded-md bg-background font-satoshi text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="font-satoshi text-sm font-medium mb-2 block">
                        Email (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="For donation receipt"
                        className="w-full px-3 py-2 border border-border rounded-md bg-background font-satoshi text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="font-satoshi text-sm font-medium mb-2 block">
                        Message (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Leave a message of support..."
                        className="w-full px-3 py-2 border border-border rounded-md bg-background font-satoshi text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                      ></textarea>
                    </div>
                  </div>

                  {/* PayPal Button */}
                  <Button size="lg" className="w-full font-integral">
                    Donate via PayPal
                  </Button>

                  {/* Disclaimer */}
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <p className="font-satoshi text-xs text-muted-foreground leading-relaxed">
                      Donations are processed securely via PayPal. Contributions
                      are non-refundable and go directly toward supporting and
                      improving BajaRC.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Right Column - Impact & Info */}
            <div className="space-y-8">
              {/* How Your Donation Helps */}
              <Card className="p-6">
                <CardHeader className="px-0 pb-4">
                  <CardTitle className="font-integral text-lg">
                    How Your Donation Helps
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                        <Image
                          src="/racecar.svg"
                          alt="Race car icon"
                          height={28}
                          width={28}
                          className="p-1"
                        />
                      </div>
                      <div>
                        <h4 className="font-satoshi font-medium mb-1">
                          RC Car Maintenance
                        </h4>
                        <p className="font-satoshi text-sm text-muted-foreground">
                          Keep our fleet of RC cars in racing condition with
                          repairs and upgrades.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                        <Wrench className="p-1" />
                      </div>
                      <div>
                        <h4 className="font-satoshi font-medium mb-1">
                          Platform Development
                        </h4>
                        <p className="font-satoshi text-sm text-muted-foreground">
                          Fund new features, bug fixes, and server
                          infrastructure improvements.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                        <ChartNoAxesGanttIcon className="p-1" />
                      </div>
                      <div>
                        <h4 className="font-satoshi font-medium mb-1">
                          Track Expansion
                        </h4>
                        <p className="font-satoshi text-sm text-muted-foreground">
                          Build new racing tracks and expand to more locations
                          worldwide.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                        <Camera className="p-1" />
                      </div>
                      <div>
                        <h4 className="font-satoshi font-medium mb-1">
                          Better Streaming
                        </h4>
                        <p className="font-satoshi text-sm text-muted-foreground">
                          Upgrade cameras and streaming equipment for higher
                          quality FPV experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Alternative Support */}
              <Card className="p-6">
                <CardHeader className="px-0 pb-4">
                  <CardTitle className="font-integral text-lg">
                    Other Ways to Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-secondary/30 transition-colors">
                      <div className="text-2xl">
                        <Share className="p-1" />
                      </div>
                      <div>
                        <div className="font-satoshi font-medium">
                          Share BajaRC
                        </div>
                        <div className="font-satoshi text-sm text-muted-foreground">
                          Tell friends about the platform
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-secondary/30 transition-colors">
                      <div className="text-2xl">
                        <Lightbulb className="p-1" />
                      </div>
                      <div>
                        <div className="font-satoshi font-medium">
                          Suggest Features
                        </div>
                        <div className="font-satoshi text-sm text-muted-foreground">
                          Help us improve the experience
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-secondary/30 transition-colors">
                      <div className="text-2xl">
                        <LucideFlag className="p-1" />
                      </div>
                      <div>
                        <div className="font-satoshi font-medium">
                          Race Often
                        </div>
                        <div className="font-satoshi text-sm text-muted-foreground">
                          Keep the community active
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
