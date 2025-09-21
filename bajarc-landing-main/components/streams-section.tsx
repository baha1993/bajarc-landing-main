import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import TwitchEmbed from "./twitch-embed";

export function StreamsSection() {
  return (
    <section id="streams" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-integral text-3xl md:text-4xl font-bold mb-6">
            Watch. Play. Compete.
          </h2>
          <p className="font-satoshi text-lg text-muted-foreground mb-12 leading-relaxed">
            Not racing? No problem. Watch the action live on:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="h-fit hover:shadow-lg transition-shadow">
              <CardContent className="text-center">
                <Link href="https://twitch.tv/bajarc/">
                  <div className="text-4xl flex items-center justify-center">
                    <Image
                      src="/twitch.svg"
                      alt="Twitch Logo"
                      width={96}
                      height={96}
                    />
                  </div>
                  <h3 className="font-integral text-xl font-semibold mb-3 hidden">
                    Twitch
                  </h3>
                </Link>
              </CardContent>
            </Card>

            <Card className="h-fit hover:shadow-lg transition-shadow">
              <CardContent className="text-center">
                <Link href="https://youtube.com/@bajarcme">
                  <div className="text-4xl flex items-center justify-center">
                    <Image
                      src="/yt.png"
                      alt="YouTube Logo"
                      width={96}
                      height={96}
                    />
                  </div>
                  <h3 className="font-integral text-xl font-semibold mb-3 hidden">
                    YouTube
                  </h3>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow h-fit">
              <CardContent className="text-center">
                <Link href="https://kick.com/bajarc">
                  <div className="text-4xl flex items-center justify-center">
                    <Image
                      src="/kick.svg"
                      alt="Kick Logo"
                      width={96}
                      height={96}
                      className="translate-x-[13px]"
                    />
                  </div>
                  <h3 className="font-integral text-xl font-semibold mb-3 hidden">
                    Kick
                  </h3>
                </Link>
              </CardContent>
            </Card>
          </div>

          <TwitchEmbed />
        </div>
      </div>
    </section>
  );
}
